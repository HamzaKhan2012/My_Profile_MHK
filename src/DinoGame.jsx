import { useEffect, useState } from 'react'

const GROUND_HEIGHT = 42
const DINO_X = 48
const DINO_WIDTH = 34
const DINO_HEIGHT = 42
const GRAVITY = 1700
const JUMP_FORCE = 720
const GAME_SPEED = 330

const initialState = {
  dinoY: 0,
  velocity: 0,
  obstacles: [],
  score: 0,
  best: 0,
  started: false,
  gameOver: false,
  spawnTimer: 0,
}

function DinoGame() {
  const [game, setGame] = useState(initialState)

  const jump = () => {
    setGame((prev) => {
      if (prev.gameOver) {
        return { ...initialState, started: true, best: prev.best }
      }

      if (prev.dinoY <= 0) {
        return {
          ...prev,
          started: true,
          velocity: JUMP_FORCE,
        }
      }

      return prev
    })
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space' || event.code === 'ArrowUp') {
        event.preventDefault()
        jump()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    let frame = 0
    let lastTime = performance.now()

    const tick = (time) => {
      const delta = Math.min((time - lastTime) / 1000, 0.032)
      lastTime = time

      setGame((prev) => {
        if (!prev.started || prev.gameOver) {
          return prev
        }

        let velocity = prev.velocity - GRAVITY * delta
        let dinoY = Math.max(0, prev.dinoY + velocity * delta)

        if (dinoY === 0 && velocity < 0) {
          velocity = 0
        }

        let spawnTimer = prev.spawnTimer + delta
        let obstacles = prev.obstacles
          .map((obstacle) => ({
            ...obstacle,
            x: obstacle.x - GAME_SPEED * delta,
          }))
          .filter((obstacle) => obstacle.x + obstacle.width > -20)

        if (spawnTimer > 1.2) {
          const width = 18 + Math.random() * 28
          const height = 18 + Math.random() * 52

          obstacles = [
            ...obstacles,
            {
              id: `${Date.now()}-${Math.random()}`,
              x: 820,
              width,
              height,
            },
          ]
          spawnTimer = 0
        }

        const score = prev.score + delta * 16
        let gameOver = false

        const dinoBox = {
          left: DINO_X,
          right: DINO_X + DINO_WIDTH,
          top: GROUND_HEIGHT + dinoY + DINO_HEIGHT,
          bottom: GROUND_HEIGHT + dinoY,
        }

        for (const obstacle of obstacles) {
          const obstacleBox = {
            left: obstacle.x,
            right: obstacle.x + obstacle.width,
            top: GROUND_HEIGHT + obstacle.height,
            bottom: GROUND_HEIGHT,
          }

          const overlapX = dinoBox.right > obstacleBox.left && dinoBox.left < obstacleBox.right
          const overlapY = dinoBox.top > obstacleBox.bottom && dinoBox.bottom < obstacleBox.top

          if (overlapX && overlapY) {
            gameOver = true
            break
          }
        }

        const best = Math.max(prev.best, Math.floor(score))

        return {
          ...prev,
          dinoY,
          velocity,
          score: Math.floor(score),
          best,
          obstacles,
          spawnTimer,
          started: !gameOver ? prev.started : false,
          gameOver,
        }
      })

      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  const restartText = game.gameOver ? 'Tap to restart' : game.started ? 'Running' : 'Press space to start'

  return (
    <section className="mini-runner-section">
      <div className="mini-runner-header scroll-reveal">
        <p className="eyebrow">04 / little break</p>
        <h2>
          Dino dash
          <br />
          <em>mode.</em>
        </h2>
      </div>

      <div className="dino-game-shell scroll-reveal">
        <div className="game-scores">
          <span>Score: {game.score}</span>
          <span>Best: {game.best}</span>
        </div>

        <div
          className="dino-game"
          onClick={jump}
          onKeyDown={(event) => {
            if (event.key === ' ' || event.key === 'Enter') {
              jump()
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Chrome dino runner game"
        >
          <div className="cloud cloud-1" />
          <div className="cloud cloud-2" />
          <div className="cloud cloud-3" />

          {game.obstacles.map((obstacle) => (
            <div
              key={obstacle.id}
              className="cactus"
              style={{
                left: `${obstacle.x}px`,
                width: `${obstacle.width}px`,
                height: `${obstacle.height}px`,
              }}
            />
          ))}

          <div
            className={`dino ${game.gameOver ? 'dino-crash' : ''}`}
            style={{ bottom: `${GROUND_HEIGHT + game.dinoY}px` }}
          >
            <span className="dino-eye" />
          </div>

          <div className="ground" />

          {game.gameOver && <div className="game-over-banner">Game over</div>}
          {!game.started && !game.gameOver && <div className="game-status">{restartText}</div>}
        </div>
      </div>
    </section>
  )
}

export default DinoGame
