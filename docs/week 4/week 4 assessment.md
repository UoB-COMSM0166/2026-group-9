# Epics - User Stories and Acceptance Criteria
## Epic 1: Core Survival & Combat System

**User Story 1**: As a player, I want to control my character's movement with WASD keys, so that I can navigate the game world flexibly to avoid enemies.
- **Acceptance Criteria**: Given the game is in an active play state, when the player presses W/A/S/D keys respectively, then the character moves upward/left/down/right continuously; when the key is released, the character stops moving immediately.

**User Story 2**: As a player, I want my character to auto-attack toward the mouse direction, so that I can focus on movement and strategy instead of manual attacking.
- **Acceptance Criteria**: Given the game is running and the character is alive, when the player moves the mouse to a target direction, then the character automatically launches attacks (projectiles/melee) toward the mouse cursor at a fixed attack rate; attacks stop only if the character dies or the game is paused.

**User Story 3**: As a player, I want enemies to spawn off-screen and move toward me, so that the game maintains constant challenge and tension.
- **Acceptance Criteria**: Given the game is in progress, when the spawn timer reaches the preset interval, then enemies of random types spawn outside the player's field of view; once spawned, enemies move toward the player's current position at their unique movement speed until they reach the player or are defeated.

**User Story 4**: As a player, I want my health to decrease when hit by enemies, so that the game has meaningful risk and consequence for mistakes.
- **Acceptance Criteria**: Given the character is alive and collides with an enemy or enemy attack, when the collision is detected, then the character's health is reduced by a fixed value (based on enemy type); if health drops to 0, the character dies and the current run ends.

---

## Epic 2: Roguelike Progression System

**User Story 1**: As a player, I want to gain rewards (weapons/buffs) after defeating a certain number of enemies, so that I can grow stronger and face tougher foes.
- **Acceptance Criteria**: Given the player has defeated the preset number of enemies (e.g., 50/100/200), when the kill count threshold is reached, then a reward selection menu pops up with 3 random options (new weapon/passive buff/stat upgrade); when the player selects an option, the reward is applied immediately and the kill count resets for the next threshold.

**User Story 2**: As a player, I want enemy difficulty to increase over time, so that the game remains challenging as I progress.
- **Acceptance Criteria**: Given the game has been running for a preset duration (e.g., 5/10/15 minutes) or the player has defeated a total number of enemies, when the progression trigger is met, then enemy spawn rate increases by 20% and enemy health/damage increases by 15%; this scaling repeats at each subsequent trigger point.

**User Story 3**: As a player, I want each run to have random weapon/buff combinations, so that every playthrough feels unique.
- **Acceptance Criteria**: Given the player starts a new run or unlocks a reward, when the reward pool is accessed, then the available weapons/buffs are randomly selected from the full pool (no duplicate core weapons in a single run); the randomization logic ensures no two runs have identical reward sequences in 90% of cases.

---

## Epic 3: Game State & End Conditions

**User Story 1**: As a player, I want to pause/resume the game at any time, so that I can take breaks without losing my progress.
- **Acceptance Criteria**: Given the game is in an active play state, when the player presses the pause key (e.g., "P"), then all enemy movement/attacks, character actions, and progression timers stop; the pause menu is displayed. Given the game is paused, when the player presses the pause key again or clicks "Resume" in the menu, then all game elements resume from the exact state before pausing.

**User Story 2**: As a player, I want the game to end when my health reaches 0, so that there is a clear failure condition and incentive to survive.
- **Acceptance Criteria**: Given the character's health drops to 0, when the death condition is detected, then all game actions stop; a game over screen is displayed showing total enemies defeated, time survived, and highest level reached; the player can choose to restart a new run or return to the main menu.

**User Story 3**: As a player, I want to see real-time stats (kill count, time survived, current level), so that I can track my progress during the run.
- **Acceptance Criteria**: Given the game is running (active or paused state), then a HUD (heads-up display) is always visible in the corner of the screen; the HUD updates in real time: kill count increments immediately when an enemy is defeated, time survived counts up by second, and level updates when the player unlocks rewards.
