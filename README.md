# 2026-group-9
2026 COMSM0166 group 9

<img width="2816" height="1536" alt="MainMenuxx" src="https://github.com/user-attachments/assets/67b508d9-26b5-4efc-a537-fdf621297925" />

📝[Link of our Kanban board]

(https://offjjx.atlassian.net/jira/software/projects/GROUP/boards/34?atlOrigin=eyJpIjoiYWU5Y2M0ZmY3Y2NmNDExNzgzNGQ3MmViMWU3OTEzMmEiLCJwIjoiaiJ9)

## ☣️KTV☣️

KTV☣️:Kill that Virus is a Roguelike game inspired by Vampire Survivors and Plague Inc. 
You play as a single cell within the human body, 
on a mission to purge all foreign pathogens and impurities. 
Players can dive into the Story Mode to experience a meticulously designed plot full of twists and turns, 
or test their limits in Endless Mode for a pure, adrenaline-pumping Roguelike combat experience.
Across both modes, players can enjoy the following signature features crafted by our team:

☣️Diverse Arsenal: A wide variety of weapons to choose from.

🧪Miraculous Powers: Power-ups with unique and awesome effects.

✏️Hand-Drawn Environments: Game scenes 100% hand-painted by our development team.

💀Escalating Challenges: Enemies that grow increasingly difficult as you progress.

📗Educational Trivia: Fun facts and insights into how the human body works.

And many more hidden surprises!
In KTV, the gameplay experience evolves based on your actions and choices. 
As your capabilities grow, the enemies and levels will 
continuously challenge your reflexes and tactical skills. 
We strive to deliver a unique, heart-racing, and addictive experience for every player!

—Purge or be purged. The choice is yours.�
Group 9 Developers

📸[Snapshot of Latest version of the Game!]

![messageImage_1773355627386](https://github.com/user-attachments/assets/bc6467a4-8cf6-4ad3-b1dc-55f7babb7f24)


🎮[Demo video!]

![新增專案](https://github.com/user-attachments/assets/bf459aad-1ec8-4561-bec8-25a3b12d70c9)


## Your Group

GROUP PHOTO. Add a group photo here.
![b5fa1d2dc8a17b01f6c224e67302c3bb](https://github.com/user-attachments/assets/f1b4bfc4-1020-4e09-a5f2-37b27771b751)


- Group member 1, Jack Feng, yj25938@bristol.ac.uk, role
- Group member 2, Sinan Xu, pi25205@bristol.ac.uk , role
- Group member 3, Yize Yang, jn25127@bristol.ac.uk, role
- Group member 4, Zhanyu xu, pr25318@bristol.ac.uk, role
- Group member 5, Jianjiang Yang, dx25555@bristol.ac.uk, role

## Project Report

### Table of Contents

- [1. Introduction](#introduction)
- [2. Requirements](#requirements)
  - [2.1 Conceptual Process](#conceptual-process)
  - [2.2 User Story](#user-story)
- [3. Design](#design)
- [4. Implementation](#implementation)
  - [4.1 The First Challenge: Optimizing Project Architecture](#optimizing-project-architecture)
  - [4.2 The Second Challenge: Camera Tracking](#camera-tracking)
  - [4.3 The Third Challenge: Enemy Module Design and Refinement](#enemy-module-design)
- [5. Evaluation](#evaluation)
  - [5.1 Qualitative Analysis: Think Aloud](#qualitative-analysis)
  - [5.2 Quantitative Evaluation](#quantitative-evaluation)
- [Process](#process)
- [Conclusion](#conclusion)
- [Contribution Statement](#contribution-statement)
- [Additional Marks](#additional-marks)

---

<a id="introduction"></a>

### 1.Introduction

- This game is based on Vampire Survivors and expands on the original gameplay with richer content and more diverse mechanics. It is a top-down 2D survival game in which players only need to use the WASD keys to control the character’s movement and the mouse to point toward enemies; the character will then attack automatically without additional input. Enemies continuously spawn outside the player’s field of view and quickly move toward the character to launch attacks. Whenever the character takes damage, their health bar decreases, and if health reaches zero, the run ends.
- The core innovation of our game lies in the deep integration of classic roguelike elements into the original structure. Once the game starts, it proceeds in real time without pausing, creating a tense and immersive experience. After defeating a certain number of enemies, players earn rewards such as new weapons, passive items, or buffs that enhance their combat ability. As time passes, they face increasingly powerful and numerous enemy waves. Each run features random upgrades and enemy combinations, ensuring that no two playthroughs feel the same. 

---

<a id="requirements"></a>

### 2. Requirements 

- 15% ~750 words
- Early stages design. Ideation process. How did you decide as a team what to develop? Use case diagrams, user stories. 

<a id="conceptual-process"></a>

#### 2.1 Conceptual Process
When brainstorming for this game, we first proposed various game genres, including board games, Snake, Tetris, and Air Combat. After discussion and voting, we decided to develop a 2D survival shooter game (similar to Vampire Survivors), and split its development and expansion into two paths: the player character and enemies.

For the player, we planned to incorporate multiple enhancement mechanics such as leveling up, weapons, equipment, and skills. For enemies, we intended to add diverse offensive mechanics including different enemy types, enemy skills, and enemy spawn quantities. Gameplay would be expanded by allowing players to level up and obtain weapon drops by defeating enemies.

However, following further team discussion and negotiation, we realized that while leveling up and looting equipment from enemies both serve to strengthen the player, the drop rate and power of loot would heavily affect in-game enjoyment. Overpowered weapon drops would deprive players of fun, while underpowered ones would ruin the experience. Additionally, integrating player level bonuses into the weapon system would complicate numerical balancing. We also wanted to avoid overwhelming players with complex character progression systems, and instead let them focus more on the thrill of combat.

With these considerations, we decided to integrate player leveling and weapon drops into roguelike gameplay. By defeating a certain number of enemies or surviving for a set duration, players would randomly obtain various buffs or weapons. This approach prevents players from overfocusing on character systems while ensuring each playthrough feels fresh and distinct from the last.

<a id="user-story"></a>

#### 2.2 User Story
| **Key Stakeholders** | **Epic** | **User Story** | **Acceptance Criteria** |
| --- | --- | --- | --- |
| Player | Epic 1: Core Survival & Combat System | As a player, I want to control my character's movement with WASD keys, so that I can navigate the game world flexibly to avoid enemies. | Acceptance Criteria: Given the game is in an active play state, when the player presses W/A/S/D keys respectively, then the character moves upward/left/down/right continuously; when the key is released, the character stops moving immediately. |
| Player | Epic 1: Core Survival & Combat System | As a player, I want my character to auto-attack toward the mouse direction, so that I can focus on movement and strategy instead of manual attacking. | Acceptance Criteria: Given the game is running and the character is alive, when the player moves the mouse to a target direction, then the character automatically launches attacks (projectiles/melee) toward the mouse cursor at a fixed attack rate; attacks stop only if the character dies or the game is paused. |
| Player | Epic 1: Core Survival & Combat System | As a player, I want enemies to spawn off-screen and move toward me, so that the game maintains constant challenge and tension. | Acceptance Criteria: Given the game is in progress, when the spawn timer reaches the preset interval, then enemies of random types spawn outside the player's field of view; once spawned, enemies move toward the player's current position at their unique movement speed until they reach the player or are defeated. |
| Player | Epic 1: Core Survival & Combat System | As a player, I want my health to decrease when hit by enemies, so that the game has meaningful risk and consequence for mistakes. | Acceptance Criteria: Given the character is alive and collides with an enemy or enemy attack, when the collision is detected, then the character's health is reduced by a fixed value (based on enemy type); if health drops to 0, the character dies and the current run ends. |
| Player | Epic 2: Roguelike Progression System | As a player, I want to gain rewards (weapons/buffs) after defeating a certain number of enemies, so that I can grow stronger and face tougher foes. | Acceptance Criteria: Given the player has defeated the preset number of enemies (e.g., 50/100/200), when the kill count threshold is reached, then a reward selection menu pops up with 3 random options (new weapon/passive buff/stat upgrade); when the player selects an option, the reward is applied immediately and the kill count resets for the next threshold. |
| Player | Epic 2: Roguelike Progression System | As a player, I want enemy difficulty to increase over time, so that the game remains challenging as I progress. | Acceptance Criteria: Given the game has been running for a preset duration (e.g., 5/10/15 minutes) or the player has defeated a total number of enemies, when the progression trigger is met, then enemy spawn rate increases by 20% and enemy health/damage increases by 15%; this scaling repeats at each subsequent trigger point. |
| Player | Epic 2: Roguelike Progression System | As a player, I want each run to have random weapon/buff combinations, so that every playthrough feels unique. | Acceptance Criteria: Given the player starts a new run or unlocks a reward, when the reward pool is accessed, then the available weapons/buffs are randomly selected from the full pool (no duplicate core weapons in a single run); the randomization logic ensures no two runs have identical reward sequences in 90% of cases. |
| Player | Epic 3: Game State & End Conditions | As a player, I want to pause/resume the game at any time, so that I can take breaks without losing my progress. | Acceptance Criteria: Given the game is in an active play state, when the player presses the pause key (e.g., "P"), then all enemy movement/attacks, character actions, and progression timers stop; the pause menu is displayed. Given the game is paused, when the player presses the pause key again or clicks "Resume" in the menu, then all game elements resume from the exact state before pausing. |
| Player | Epic 3: Game State & End Conditions | As a player, I want the game to end when my health reaches 0, so that there is a clear failure condition and incentive to survive. | Acceptance Criteria: Given the character's health drops to 0, when the death condition is detected, then all game actions stop; a game over screen is displayed showing total enemies defeated, time survived, and highest level reached; the player can choose to restart a new run or return to the main menu. |
| Player | Epic 3: Game State & End Conditions | As a player, I want to see real-time stats (kill count, time survived, current level), so that I can track my progress during the run. | Acceptance Criteria: Given the game is running (active or paused state), then a HUD (heads-up display) is always visible in the corner of the screen; the HUD updates in real time: kill count increments immediately when an enemy is defeated, time survived counts up by second, and level updates when the player unlocks rewards. |

#### 2.3✨The Game Twist✨

Initial Concepts and Iterations
Early in the development phase, we considered altering enemy AI behaviors or introducing complex environmental hazards as the primary "twist." However, playtesting revealed that the core gameplay already presented a significant challenge. We shifted our design philosophy from "mechanical overload" to "cognitive subversion." Instead of overwhelming players with impossible difficulty, we aimed for a "benevolent challenge"—a clever subversion of established mechanics akin to a brain teaser. This ensures that failure remains engaging and witty rather than purely frustrating, encouraging players to persist rather than quit.

The Final Solution: Neurological Interference
The final Game Twist is seamlessly integrated into the narrative of the third level. As the host’s body becomes critically infected, the Central Nervous System (CNS) begins to fail, leading to pathologically induced Control Interference. This manifests as dynamic input remapping at specific intervals:

10–20s: Vertical Inversion (Up/Down swap).

30–40s: Horizontal Inversion (Left/Right swap).

Final Phase: Total Control Inversion (180-degree remapping).

🧬Benefits and Rationale🧬

Narrative-Mechanic Synergy: By grounding the control inversion in the story (nervous system failure), we created a cohesive experience where the mechanics reinforce the desperation of the narrative. This drives player curiosity regarding the underlying lore.

Accessible Complexity: Rather than introducing complex system or difficult Boss patterns, we re-utilized the most fundamental interaction—movement—to create a new layer of depth. This makes the challenge intuitive to understand yet demanding to master.

Validated Innovation: Through internal peer reviews and consultation with Teaching Assistants (TAs), this "Control Inversion" was recognized as a highly creative and effective twist. It successfully balances psychological tension with gameplay fairness, a milestone our team is particularly proud of.

#### 2.4✨Stakeholders✨

Stakeholder Analysis via Onion Diagram

To ensure the successful delivery of Kill That Virus!, we conducted a stakeholder mapping exercise using an Onion Diagram. This allowed us to categorize individuals and entities based on their influence and proximity to the core system:

The Core System: Represents the internal game logic, including the state machine and the narrative victory sequence.

Direct Users & Team: Includes the Player, who seeks an engaging experience, and the Development Team, responsible for technical implementation and bug fixing.

Project Environment: Primarily consists of TAs and Lecturers. Their requirements for "Object-Oriented Design" and "Game Twist" significantly shaped our architectural decisions, such as the implementation of the Control Inversion mechanic.

External Environment: Encompasses global entities like Browser Vendors (Google/Chrome) and hosting platforms like GitHub Pages. Our design for asynchronous audio handling was a direct response to the Autoplay Policies enforced by this outermost layer.

<img width="1920" height="1080" alt="未命名" src="https://github.com/user-attachments/assets/2c0329f3-e80d-49f7-95e7-a00a67973e77" />


---

<a id="design"></a>

### 3. Design

3.1 Architecture Overview:

Our system architecture adheres to a core principle: every functional component and gameplay mechanic must remain highly focused on Kill That Virus! to eliminate functional redundancy. This focused approach ensures a transparent and direct relationship between event triggers, player feedback, and state transitions. For instance, as a player eliminates enemies, the resulting state change (kill count accumulation) directly drives the progression into subsequent levels. This hierarchical and interdependent design allows the system to be decomposed into manageable modular subsystems rather than a monolithic, hard-to-maintain codebase.

3.2 Class Design:

Our class design follows the principle of responsibility separation to manage the complexity of a multi-stage infection battle. The Game Controller coordinates the main loop and oversees the high-level gameState. The Player class encapsulates movement, infection status (HP), and interactions with viral enemies. A dedicated Progression Component (within the system layer) acts as the single source of truth for the current kill count and level thresholds, translating gameplay performance into state transitions. Other classes, such as combat, represent domain entities with their own autonomous update and collision behaviours. Finally, the UI/Victory layer (including the showComicBook module) presents the narrative conclusion and UI feedback based on these internal states.

The most important design decision was to decouple the victory narrative from the core combat logic. Instead of embedding ending triggers inside every enemy destruction function, we implemented a centralized Progression Manager. This manager monitors state changes and triggers the WIN state only when specific thresholds are met. This keeps the codebase clean, reduces redundancy, and allows us to adjust level difficulty (e.g., required kills) in one central location without affecting the underlying combat mechanics.

<img width="5506" height="5205" alt="Game Engine Architecture-2026-04-23-140625" src="https://github.com/user-attachments/assets/c9f39b2b-7c2b-4bbb-b307-bb3066ab95a9" />



Key Design Patterns:

Separation of Concerns: 

By segregating functionality into Entity (Player, Enemy), System (Collision, Combat), and Core (Scene Management) layers, we achieved low coupling across the project.

Scalability: 

This modularity ensures that adding new viral strains or narrative comic pages only requires configuration updates in the Data Layer (Pools) or index expansion in the Victory Module, without altering the core game loop.

3.3: State Machine Diagram representing the Lifecycle of Game.

The State Machine Diagram shows the dynamic progression logic of Kill That Virus!. The system initializes at the START_MENU and transitions into a series of combat states (LEVEL_1 to LEVEL_3) based on kill count triggers. A significant state transition occurs upon completing Level 3, where the ProgressionManager hands over control to the showComicBook module. This architectural choice ensures that the narrative conclusion is treated as a distinct state, isolating the comic-rendering logic from the primary combat engine. Any failure state (HP ≤ 0) is globally handled by transitioning to GAME_OVER, allowing for a complete system reset back to the menu.

<img width="1216" height="677" alt="messageImage_1776350569213" src="https://github.com/user-attachments/assets/63489d14-62b4-4b89-b485-c679a5b60f96" />

3.3.1 Behavioural Design:

While the class diagram shows the static structure of the system, the behavioural design explains how critical gameplay events—specifically the transition from intense combat to narrative conclusion—unfold over time. In our project, the most vital interaction is the Progression-to-Victory pipeline. 

The behavioural path begins when a valid collision results in an enemy's destruction, triggering a signal to the Progression Manager. Once the manager identifies that the kill count has reached the level-3 threshold, it executes the triggerGameWin sequence. This path involves a complex state shift: the combat loop is paused, the Ending BGM is initialized via a user-start audio prompt to satisfy browser security policies, and the Comic Controller takes over the rendering loop. The subsequent behaviour is driven by User Input: each mouse click propagates through the system to update the currentComicPage and reset the fadeAlpha for a smooth visual transition. This sequence demonstrates how a simple gameplay event (a kill) propagates through the system to become a state change and, finally, player-visible narrative feedback.

<img width="1250" height="667" alt="messageImage_1776344301852" src="https://github.com/user-attachments/assets/a5ed252b-f02e-4a8f-ba09-629cd422abd5" />

[The sequence diagram above illustrates the interaction between key modules during the gameplay transition]

3.3.2 Level Progression Logic:

The dynamic progression of the game is governed by the checkProgress() method, which periodically evaluates player performance metrics. For example, in Level 2, the system simultaneously monitors the survival timer and the kill count. Only when both criteria are met will the system execute the goToLevel3() transition.

3.3.3 Post-Game Narrative Sequence:

The victory sequence employs a sophisticated behavioural pattern based on Asynchronous Resource Handling and user input:

Initialization & Audio Context: Upon reaching the final threshold, the ProgressionManager signals the VictoryScene. To comply with modern browser security policies regarding autoplaying audio, we implement userStartAudio() within the first user interaction to unlock the audio context for the Ending BGM.

Visual Transition Algorithm: To enhance the narrative experience, we implemented a Fade-to-Black algorithm rather than abrupt image switching. By manipulating a comicFadeAlpha variable in the per-frame update loop, we achieve a smooth visual transition that enhances the atmosphere of the ending.

Asynchronous Synchronization (Atomicity): While assets are loaded asynchronously to prevent browser blocking, our behavioural design ensures that showComicBook() is only invoked by the sceneSwitch() once the isLoaded state is confirmed. This guarantees Atomicity—ensuring the narrative sequence never begins with missing or partially loaded assets.


---

<a id="implementation"></a>

### 4. Implementation

Our game, *Kill that Virus*, is a top-down 2D survival shooter. Players control a cell moving through a large, scrolling map, defending against waves of enemies and navigating increasingly difficult levels.



<a id="optimizing-project-architecture"></a>

#### 4.1 The First Challenge: Optimizing Project Architecture

Our initial codebase implemented a game prototype, allowing players to control a cell to move and shoot to defend against enemies. However, all the code was concentrated in a single JavaScript file, leading to high coupling and hindering subsequent team collaboration.

Therefore, following object-oriented programming and modular design principles, we redesigned the project architecture and split the original code. We divided the previously mixed functions into multiple modules based on their responsibilities, such as input processing, enemy generation, level progression, UI rendering, and entity objects.

The benefits of this approach are that different team members can be responsible for different modules, reducing merge conflicts and making subsequent debugging, adding new enemies, and incorporating new mechanics much easier. Through this refactoring, we adhered to the development principles of low coupling and high cohesion, gradually evolving the project from a single-file prototype into a more clearly structured and maintainable game application.



<a id="camera-tracking"></a>

#### 4.2 The second challenge: Camera tracking

Our game map is much larger than the visible canvas, so the camera follows the player's movement, while enemies spawn outside the field of view. This presented several challenges:

- Mouse aiming had to be correctly translated from screen space to world space;
- Enemy spawn locations had to be around the player and not exceed the map boundaries;
- All rendering had to be synchronized with camera movement.

We solved this problem by introducing a camera offset system and always using world coordinates. Player movement, enemy positions, and bullet trajectories are all updated in world space, while rendering applies camera translation separately. For aiming, camera offset is used to correct the mouse position before calculating the bullet trajectory angle. For spawning, enemies spawn at a fixed distance around the player and are then confined to the world boundaries. This solution ensured smooth gameplay and consistent visuals even as map size, enemy numbers, and level complexity increased.



<a id="enemy-module-design"></a>

#### 4.3 The third challenge: Enemy module design and refinement

As a shooter, the enemy module is undoubtedly a crucial part of the game mechanics. Through multiple iterations, we gradually refined the enemy mechanics and enriched the variety of enemies.

Phase 1: Spawning, Chase, Collision, and Health Mechanisms

First, we need to ensure the implementation of the most basic mechanics. This phase was accomplished using `spawnEnemies()` and `updateEnemiesAndCombat()`. In this phase, we implemented:

- Enemies will periodically spawn outside the player's field of view.
- Enemies will continuously move towards the player. When the distance between an enemy and the player is less than the sum of the radii of their respective areas, it is considered a collision; the enemy dies and disappears, and the player's health decreases.
- When the distance between an enemy and a bullet fired by the player is less than the radius of the enemy's area, it is considered a collision; the bullet disappears, and the enemy's health decreases. When the enemy's health reaches 0, it dies and disappears.
- Enemy health, spawn speed, and movement speed increase as the level progresses.

Phase 2: New Enemies, New Mechanics

Building on the achievements of the previous step, we must consider how to increase the fun of the enemies. This can be achieved by adding more enemies and implementing new mechanics. The achievements of this phase are as follows:

- The const `ENEMY_POOL` was defined and populated in `enemy-pool.js`, defining three different enemy shapes and attributes: the *basic* enemy, the *tank* (high health but slow speed), and the *fast* enemy (low health but fast speed).
- Particle effects and damage animations were introduced in `drawGameContent()`. When an enemy dies and disappears, a brief, scattered particle effect appears in its place; when an enemy collides with a bullet, it briefly turns white and flashes. These provide visual stimulation for the player.
- The enemy spawn mechanism was modified. As the level progresses, there is a higher probability of spawning tanks and fast enemies, ensuring the game remains challenging.

Phase Three: More and Better Enemies and New Sound Effects

In the previous phase, although the enemy module was made more interesting, the simple, solid-color graphics were not aesthetically pleasing. Therefore, the next step is to optimize the art and music:

- Two new enemies were introduced: the *sprinter*, which accelerates during a dash; and the *splitter*, which splits upon death.

- Modified enemy appearance, replacing the original solid-color graphics with different 2D textures.

- Plays a death sound effect when an enemy dies.

---

<a id="evaluation"></a>

### 5. ✍️Evaluation💭

<a id="qualitative-analysis"></a>

#### 5.1 Qualitative Analysis: Think Aloud

🤔User Observations:

Attack Frequency: Players complained that having to click the mouse for every single attack was exhausting due to the high frequency of repetitive actions.

Game Guidance: Players suggested adding various in-game instructions to reduce the sense of confusion during their first playthrough.

Visual Feedback (Projectiles): Players recommended adding flight trajectories (trails) to attacks for better visual identification and clarity.

Impact Feedback (Damage): Players suggested adding screen shake and prominent warning effects when taking damage to enhance the overall gameplay experience and feel.

Tutorial Level: Players suggested implementing a tutorial stage to help them better understand the mechanics and objectives of the game.

✨Analysis Outcome:

Optimizing Attack Mechanics: The most frequent feedback received was regarding the "one click, one attack" constraint. Players found constant clicking tedious, especially when facing large swarms of enemies. To resolve this and improve immersion, we will implement an auto-fire feature that allows continuous weapon use by holding down the mouse button.

Improving Intuitive Design: Requests for both game instructions and tutorial levels reflect a core issue: the current gameplay experience is not intuitive enough. While this can be addressed through tutorials, we aim to prioritize improving the UI/UX design and providing clearer on-screen guidance to create a more seamless learning curve.

Enhancing Visual Clarity: Suggestions for prominent flight trajectories indicate that our current object rendering and visual emphasis need improvement. We will adopt this feedback by using high-contrast, vivid color palettes for future weapons and adding visual trails where necessary to improve tracking.

Refining Game "Feel" (Juiciness): Compared to the current system where taking damage only results in a numerical HP deduction, adding screen shake and visual alerts will significantly improve the "game feel" and sensory feedback. We have decided to implement these features in the next update.

- One quantitative evaluation (of your choice) 
- Description of how code was tested. 



<a id="quantitative-evaluation"></a>

#### 5.2 Quantitative Evaluation

SUS(System Usability Scale)

SUS is an internationally common user experience evaluation scale, which contains ten questions. The visualization results of the SUS table are as follows.

<img width="696" height="506" alt="image" src="https://github.com/user-attachments/assets/bbdc7755-c3b2-46e1-bd1e-f571e8f7c2cf" />

Descriptive statistics:

| **Question** **No.** | **Simplified** **Question Description**                    | **Reve rse Scor ing** | **M**   **ea** **n** **Sc or** **e** | **Me** **dia** **n** | **Stan dard** **Devia** **tion** | **Mini mum Score** | **Maxi mum Score** | **Rati** **ng** **Leve** **l** |
| -------------------- | ---------------------------------------------------------- | --------------------- | ------------------------------------ | -------------------- | -------------------------------- | ------------------ | ------------------ | ------------------------------ |
| 1                    | I   think that I would like to use this system frequently. | No                    | 4.10                                 | 4.00                 | 0.70                             | 3                  | 5                  | Goo d (4.0-   4.4)             |
| 2                    | I found the   system unnecessarily complex.                | Yes                   | 2.40                                 | 2.00                 | 1.43                             | 1                  | 5                  | Poor (<3.   0)                 |
| 3    | I thought   the system was easy to use.                      | No   | 4.60 | 5.00 | 0.49 | 4    | 5    | Exce llent (4.5   +) |
| 4    | I think that I would need the support of a technical person   to use this system. | Yes  | 1.60 | 1.50 | 0.66 | 1    | 3    | Poor (<3.   0)       |
| 5    | I found   the various functions in   this system were well integrated. | Yes  | 4.00 | 4.00 | 0.77 | 3    | 5    | Goo d (4.0-   4.4)   |
| 6    | I thought there was too much inconsistency in this   system. | No   | 1.60 | 1.00 | 0.80 | 1    | 3    | Poor (<3.   0)       |
| 7    | I would   imagine that most people   would learn to use this system quickly. | Yes  | 4.60 | 5.00 | 0.92 | 2    | 5    | Exce llent (4.5   +) |
| 8    | I found the system very cumbersome to use.                   | No   | 2.30 | 2.00 | 1.19 | 1    | 5    | Poor (<3.   0)       |
| 9    | I felt   very confident using the   system.                  | Yes  | 4.60 | 5.00 | 0.49 | 4    | 5    | Exce llent (4.5   +) |
| 10   | I needed to learn a lot   of things before I could use this   system. | No   | 1.70 | 1.00 | 1.27 | 1    | 5    | Poor (<3.   0)       |

1. Project advantages (Q3, Q7, Q9, Q4, Q6): The game is easy to use and the threshold is low. The core operation is to control the direction and attack of the mouse movement with the right hand, and the movement of the character with the left hand. It adopts the common style of the industry, which reduces the cognitive cost of players. It only needs a brief introduction, and the novice teaching will be added to the starting interface. The difficulty of the level is from simple to deep, which makes players familiar with the operation method and increases their confidence in using the game.
2. Good items (Q1, Q5, Q10): players' willingness to use, function integration needs to be improved. It is necessary to improve the playability and complexity of the game. At this stage, it is only the initial version, so give users a little simple feedback on the game, and the later version will increase the playability and complexity of the game.

(1). Increase the types of weapons, from ordinary firearms at this stage to pistols, sniper rifles, daggers and grenades, etc.

(2). As the level increases, new enemies and new mechanisms are added to improve the difficulty of the game.

3. Differential items (Q2, Q8): Technicians are required to guide the problem. There is no self-group solution. The later sequence needs to be improved, because the interface has not been introduced at this stage, and technical personnel still need to introduce the gameplay, so it is necessary to add a normative introduction process to assist players in getting started. At the same time, the operation fault tolerance design is added. For example, the attack judgment range is expanded without precise positioning. Reduce the levels caused by players' operating errors, and reduce the need for help from the root cause.



NASA:

<img width="951" height="817" alt="image" src="https://github.com/user-attachments/assets/04c01bbd-5cc4-46f8-8208-6341cc988fbc" />


## NASA-TLX Workload Assessment
Mean scores with standard deviation (n participants)  
Scale: 1-10

| participants | Mean  | Standard Deviation | Minimum | 25th Percentile | Median (50th Percentile) | 75th Percentile | Maximum | Interquartile Range (IQR) |
| ------------ | ----- | ------------------ | ------- | --------------- | ----------------------- | --------------- | ------- | ------------------------- |
| 1            | 3.88  | 1.89               | 1       | 2.75            | 4                       | 5               | 9       | 2.25                      |
| 2            | 4.50  | 2.37               | 1       | 3.00            | 5                       | 5               | 10      | 2.00                      |
| 3            | 4.06  | 2.14               | 1       | 2.75            | 4                       | 5               | 8       | 2.25                      |
| 4            | 3.75  | 2.41               | 1       | 2.00            | 3                       | 5               | 9       | 3.00                      |
| 5            | 4.62  | 3.05               | 1       | 1.75            | 4.50                    | 7.25            | 10      | 5.50                      |
| 6            | 5.50  | 3.61               | 1       | 2.75            | 4.00                    | 10.00           | 10      | 7.25                      |
| 7            | 4.06  | 2.35               | 1       | 2.00            | 5.00                    | 5.00            | 9       | 3.00                      |
| 8            | 4.38  | 1.59               | 2       | 3.00            | 4.00                    | 5.00            | 8       | 2.00                      |
| 9            | 4.75  | 2.89               | 1       | 2.00            | 4.00                    | 8.00            | 9       | 6.00                      |
| 10           | 4.81  | 3.06               | 1       | 1.00            | 5.00                    | 7.25            | 10      | 6.25                      |


In summary, the evaluation data of the above six core dimensions, as well as the discreteness and high and low score characteristics of the evaluator's score, from the three core directions of reducing unreasonable task load, improving player performance satisfaction, and reducing frustration, provide implementable optimization suggestions for the group's subsequent development, and adapt to the core attributes of the game "light experience, low threshold, high fun", as follows:

1. High time pressure

The overall score of the time pressure dimension in the evaluation is high, which is one of the core load points, indicating that the task promotion rhythm, operation response window, level timing settings, etc. of the current game are beyond the adaptation range of some players, resulting in urgent negative experiences for players. The difficulty of the primary level has been reduced,

Optimize the level timing design: cancel the forced timing of non-core links (such as scene exploration and prop selection), and only set reasonable timing in the core challenge links; and the timing threshold refers to the completion speed setting of the evaluator with a low score, and reserve buffer time.

2. Differentiated and high value of frustration , Effort and Performance Satisfaction do not match

The frustration dimension score is highly discrete (some evaluators score up to 10 points), and it is inversely related to "self-performance satisfaction", indicating that the player's negative emotions mainly come from the high cost of failure, lack of feedback, and the rapid increase in difficulty, which is a key problem affecting the retention of the game. The player's investment has not been The positive return should be reduced, thus reducing the game experience.

Optimize the failure replay mechanism to reduce the sunk cost: after failing to break through the level, you don't need to start from the beginning, and you can revive from the key node of the current level.

Increase instant positive feedback in the whole process: When players complete small operations, such as clicking correctly, collecting props, and unlocking small goals, they give feedback through visual effects, short sound effects, and light numerical rewards, rather than just feedback after the end of the level; even if the operation is wrong, only gentle hints are given to avoid negative accusation copywriting.
Conceptual Process
When brainstorming for this game, we first proposed various game genres, including board games, Snake, Tetris, and Air Combat. After discussion and voting, we decided to develop a 2D survival shooter game (similar to Vampire Survivors), and split its development and expansion into two paths: the player character and enemies.
For the player, we planned to incorporate multiple enhancement mechanics such as leveling up, weapons, equipment, and skills. For enemies, we intended to add diverse offensive mechanics including different enemy types, enemy skills, and enemy spawn quantities. Gameplay would be expanded by allowing players to level up and obtain weapon drops by defeating enemies.
However, following further team discussion and negotiation, we realized that while leveling up and looting equipment from enemies both serve to strengthen the player, the drop rate and power of loot would heavily affect in-game enjoyment. Overpowered weapon drops would deprive players of fun, while underpowered ones would ruin the experience. Additionally, integrating player level bonuses into the weapon system would complicate numerical balancing. We also wanted to avoid overwhelming players with complex character progression systems, and instead let them focus more on the thrill of combat.
With these considerations, we decided to integrate player leveling and weapon drops into roguelike gameplay. By defeating a certain number of enemies or surviving for a set duration, players would randomly obtain various buffs or weapons. This approach prevents players from overfocusing on character systems while ensuring each playthrough feels fresh and distinct from the last.
3. The score for the evaluator is very discrete.

The scoring standard difference in all dimensions is high, indicating that the game experience of different players varies greatly. The mini-game lacks universal experience design and needs to take into account the needs of different players.

Do layered design for players to realize the basic experience of "thousands of people and thousands of faces": when entering the game for the first time, players can choose the difficulty or skip the preliminary test level. Unify the core interaction logic, reduce experience deviations, let players form operating habits, and reduce experience deviations caused by interaction inconsistency.



Testing:

With the improvement of functions and pages in the future of the game, test codes will be added one after another to prevent errors, and the simple test code will be designed in the current version:

1. White box test code

It is used to verify internal functions and variable logic. The following code cases are only for display to test whether the player's initial health is correct and whether the position is in the middle:

let player = {};

function resetPlayer() { 

	player.x = 960;
	
	player.y = 540;
	
	player.hp = 10;

}

 

function assert(condition, testName) { 

	if (condition) {
	
		console.log(`testing pass: ${testName}`);
	
	} else {
	
		console.log(`testing fail: ${testName}`);
	
	}

}

resetPlayer();

assert(player.x === 960 && player.y === 540 && player.hp === 10, "player’s initial HP=10, position=(960,540)";

 

2. Black box test code

It is used to verify the performance of the player's input and output function, and give a case: the player presses the D key, and the output effect is that the character moves four units to the right:

 

let player = { x: 960, y: 540 };

function movePlayer(key) { 

	if (key === "D") {
	
	player.x += 4;
	
	}

}

function assert(condition, testName) { 

	if (condition) {
	
		console.log(`testing pass: ${testName}`);
	
	} else {
	
		console.log(`testing fail: ${testName}`);
	
	}

}

const originalX = player.x; 

movePlayer("D");

assert(player.x === originalX + 4, "The player presses the D key and moves 4 units to the right");

---

<a id="process"></a>

### Process 

- Process

In this game development project, our five group members from demand conception, user research, function realization to code optimization iteration, the whole process is constantly adjusted to complete the game version that can be run at present.

1. Discussion process

Throughout the whole process of game production, we have established a standardized and fixed rhythm of discussion and reporting to ensure the transparency of the progress and the timely resolution of problems. The team uniformly uses Jira to record the progress of tasks, update the development status, track pending tasks and bugs, and ensure that all work online can be checked and visualized. At the same time, offline, we regularly report on the progress after class every Tuesday, and report that everyone has completed the content every week, the need to coordinate resources, and the current difficulties encountered and discussed solutions. And cooperate with WhatsApp and other social software to communicate in time. Ensure that the program is clear, the responsibility is allocated, and the problem is not delayed or left behind. Effectively avoid rework and delay in progress.

2. Use of collaborative tools

| Tool          | Uses                                                                 |
|---------------|----------------------------------------------------------------------|
| Jira          | Task management, progress tracking, kanban synchronization, issue recording and follow-up |
| Windows Paint | Game interface sketching, interaction diagram drawing, gameplay process mapping |
| GitHub        | Code hosting, branch development, multi-person collaborative programming, version rollback |
| J5            | Game logic development, function implementation, scene construction   |

We use a variety of tools to support development, design, collaboration and version management. Each tool has a clear division of labor to improve the overall efficiency. Among them, GitHub is the most important, which can provide a multi-person collaborative programming platform, so that each member can leave traces of work and can be changed back. Readme documents and code explanation documents can be submitted for group members to browse at any time, which greatly improves work efficiency.

Division of Labor Among Team Members

In the early stage, we mainly focus on collective co-creation and democratic decision-making: the core gameplay, art style, plot framework and other contents of the game are determined through collective discussion, joint conception and voting to ensure that each member's ideas can be fully adopted. The README document of the project is also written and supplemented by team members, which ensures the consistency of the overall direction.

In the late stage of development, in order to improve efficiency and reduce cross-dependence, we adopt the method of drawing labor + modular development to split the game into independent modules and clarify the responsibilities of each member. The specific division of labor is as follows:

| Team Member    | Role                         | Module                              | Detailed Responsibilities                                                                 |
|----------------|------------------------------|-------------------------------------|-------------------------------------------------------------------------------------------|
| Jianjiang Yang | Player Character Development | Player Character & Auxiliary Systems| Implement character movement, attack, defense, healing and item systems; expand various attack methods and interaction logic |
| Zhanyu Xu      | Enemy System Development     | Enemies (Minions + Boss)            | Design enemy AI, behavior patterns and attack methods; implement logic for level monsters and boss battles |
| Yize Yang      | UI Development               | Interface & Game Mode Flow          | Create start interface, status bar, story mode flow for the first two levels, reward interface for endless roguelike mode, etc. |
| Sinan Xu       | Art & Narrative Integration  | Art Assets & Storytelling           | Integrate visual effects, animations, images and map resources; build game scenes; improve plot text and presentation |
| Jack Feng      | Level & Difficulty Design     | Level Flow & Difficulty Tuning      | Design flow, rhythm and difficulty curve for the first two story levels; implement generation logic, progressive difficulty rules and reward mechanism for the third endless mode |


In GitHub collaboration, we develop by creating independent branches. Each member completes the development work in his own code file, and finally integrates it, which not only ensures that the development progress does not interfere with each other, but also makes the overall code structure more standardized and easy to maintain.

<a id="conclusion"></a>

### Conclusion

- 10% ~500 words

- Reflect on the project as a whole. Lessons learnt. Reflect on challenges. Future work, describe both immediate next steps for your current game and also what you would potentially do if you had chance to develop a sequel.

---

<a id="contribution-statement"></a>

### Contribution Statement

- Provide a table of everyone's contribution, which *may* be used to weight individual grades. We expect that the contribution will be split evenly across team-members in most cases. Please let us know as soon as possible if there are any issues with teamwork as soon as they are apparent and we will do our best to help your team work harmoniously together.

---

<a id="additional-marks"></a>

### Additional Marks

You can delete this section in your own repo, it's just here for information. in addition to the marks above, we will be marking you on the following two points:

- **Quality** of report writing, presentation, use of figures and visual material (5% of report grade) 
  - Please write in a clear concise manner suitable for an interested layperson. Write as if this repo was publicly available.
- **Documentation** of code (5% of report grade)
  - Organise your code so that it could easily be picked up by another team in the future and developed further.
  - Is your repo clearly organised? Is code well commented throughout?
