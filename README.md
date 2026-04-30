# 2026-group-9
> 2026 COMSM0166 group 9

<img width="2816" height="1536" alt="MainMenuxx" src="https://github.com/user-attachments/assets/67b508d9-26b5-4efc-a537-fdf621297925" />

📝[Link of our Kanban board](https://offjjx.atlassian.net/jira/software/projects/GROUP/boards/34?atlOrigin=eyJpIjoiYWU5Y2M0ZmY3Y2NmNDExNzgzNGQ3MmViMWU3OTEzMmEiLCJwIjoiaiJ9)

## ☣️KTV☣️

> KTV☣️:Kill that Virus is a Roguelike game inspired by Vampire Survivors and Plague Inc. 
> You play as a single cell within the human body, 
> on a mission to purge all foreign pathogens and impurities. 
> Players can dive into the Story Mode to experience a meticulously designed plot full of twists and turns, 
> or test their limits in Endless Mode for a pure, adrenaline-pumping Roguelike combat experience.
> Across both modes, players can enjoy the following signature features crafted by our team:
>
> ☣️Diverse Arsenal: A wide variety of weapons to choose from.
>
> 🧪Miraculous Powers: Power-ups with unique and awesome effects.
>
> ✏️Hand-Drawn Environments: Game scenes 100% hand-painted by our development team.
>
> 💀Escalating Challenges: Enemies that grow increasingly difficult as you progress.
>
> 📗Educational Trivia: Fun facts and insights into how the human body works.
>
> And many more hidden surprises! In KTV, the gameplay experience evolves based on your actions and choices. As your capabilities grow, the enemies and levels will continuously challenge your reflexes and tactical skills. We strive to deliver a unique, heart-racing, and addictive experience for every player!
>
> *Purge or be purged. The choice is yours.* 
> ——Group 9 Developers.

📸[Snapshot of Latest version of the Game!]

<img width="500" height="306" alt="GG" src="https://github.com/user-attachments/assets/30bbfdd6-388f-4230-8add-5f080297b00a" />

🎮[Demo video!](https://youtu.be/3Va1YWV1nhU?si=u7KqALxQdLGPdWOX)

## Your Group

![b5fa1d2dc8a17b01f6c224e67302c3bb](https://github.com/user-attachments/assets/f1b4bfc4-1020-4e09-a5f2-37b27771b751)


| Name           | GitHub Username | Email                 | Role               |
| -------------- | --------------- | --------------------- | ------------------ |
| Jack Feng      | Jack8ot         | yj25938@bristol.ac.uk | Level Designer     |
| Sinan Xu       | xusinan-sys     | pi25205@bristol.ac.uk | Graphic Designer   |
| Yize Yang      | 12456-stac      | jn25127@bristol.ac.uk | UI Designer        |
| Zhanyu Xu      | xzy             | pr25318@bristol.ac.uk | Enemy Designer     |
| Jianjiang Yang | roocl           | dx25555@bristol.ac.uk | Character Designer |

---

# Project Report

## Table of Contents

- [1. Introduction](#introduction)
- [2. Requirements](#requirements)
  - [2.1 Conceptual Process](#conceptual-process)
  - [2.2 User Story](#user-story)
  - [2.3 Stakeholders](#stakeholders)
- [3. Design](#design)
  - [3.1 Architecture Overview](#architecture-overview)
  - [3.2 Class Design](#class-design)
  - [3.3 State Machine Diagram](#state-machine-diagram)
    - [3.3.1 Behavioural Design](#behavioural-design)
    - [3.3.2 Level Progression Logic](#level-progression-logic)
    - [3.3.3 Post-Game Narrative Sequence](#post-game-narrative-sequence)
- [4. Implementation](#implementation)
  - [4.1 The First Challenge: Optimizing Project Architecture](#optimizing-project-architecture)
  - [4.2 The Second Challenge: Camera Tracking](#camera-tracking)
  - [4.3 The Third Challenge: Enemy Module Design and Refinement](#enemy-module-design)
- [5. Evaluation](#evaluation)
  - [5.1 SUS System Usability Scale](#sus-system-usability-scale)
  - [5.2 NASA](#nasa)
  - [5.3 Testing](#testing)
- [6. Process](#process)
  - [6.1 Discussion Process](#discussion-process)
  - [6.2 Use of Collaborative Tools](#collaborative-tools)
  - [6.3 Division of Labor Among Team Members](#division-of-labor)
- [7. Sustainability](#sustainability)
  - [7.1 Technical Dimension](#technical-dimension)
  - [7.2 Individual Dimension](#individual-dimension)
  - [7.3 Social Dimension](#social-dimension)
  - [7.4 Economic Dimension](#economic-dimension)
  - [7.5 Environmental Dimension](#environmental-dimension)
- [8. Conclusion](#conclusion)
  - [8.1 Lessons Learnt](#lessons-learnt)
  - [8.2 Reflect on Challenges](#reflect-on-challenges)
  - [8.3 Future Work](#future-work)
- [9. Contribution Statement](#contribution-statement)
- [10. AI Statement](#ai-statement)

---

<a id="introduction"></a>

## 1.Introduction

- This game is based on Vampire Survivors and expands on the original gameplay with richer content and more diverse mechanics. It is a top-down 2D survival game in which players only need to use the WASD keys to control the character’s movement and the mouse to point toward enemies; the character will then attack automatically without additional input. Enemies continuously spawn outside the player’s field of view and quickly move toward the character to launch attacks. Whenever the character takes damage, their health bar decreases, and if health reaches zero, the run ends.
- The project expands the basic survival formula with multiple stages, different enemy types, skill-based support tools, and a roguelike mode. Enemies are not only spawned randomly, but are also generated according to the player’s camera position and the current stage, helping to create pressure while avoiding unfair on-screen spawning. The player can also use a shield, medkits, and different bullet modes, which makes survival depend not only on movement but also on timing and resource management.
- A key feature of our game is the integration of roguelike elements into the real-time survival structure. In Roguelike Mode, the game continues without pausing for long periods, while the difficulty gradually increases over time. Players can receive random buff choices during the run, improving aspects such as damage, firing speed, movement speed, maximum health, or available medkits. These upgrades create different play styles across repeated attempts and make each run feel less predictable. Together with the story stages, countdown objectives, kill requirements, enemy waves, and visual/audio feedback, the game aims to provide a tense, replayable, and accessible survival shooting experience.

---

<a id="requirements"></a>

## 2. Requirements 

<a id="conceptual-process"></a>

### 2.1 Conceptual Process

<img width="1280" height="720" alt="MyVideo_2" src="https://github.com/user-attachments/assets/f525a378-d631-4a9f-8728-5dcda3d18880" />


When brainstorming for this game, we first proposed various game genres, including board games, Snake, Tetris, and Air Combat. After discussion and voting, we decided to develop a 2D survival shooter game (similar to Vampire Survivors), and split its development and expansion into two paths: the player character and enemies.

For the player, we planned to incorporate multiple enhancement mechanics such as leveling up, weapons, equipment, and skills. For enemies, we intended to add diverse offensive mechanics including different enemy types, enemy skills, and enemy spawn quantities. Gameplay would be expanded by allowing players to level up and obtain weapon drops by defeating enemies.

However, following further team discussion and negotiation, we realized that while leveling up and looting equipment from enemies both serve to strengthen the player, the drop rate and power of loot would heavily affect in-game enjoyment. Overpowered weapon drops would deprive players of fun, while underpowered ones would ruin the experience. Additionally, integrating player level bonuses into the weapon system would complicate numerical balancing. We also wanted to avoid overwhelming players with complex character progression systems, and instead let them focus more on the thrill of combat.

With these considerations, we decided to integrate player leveling and weapon drops into roguelike gameplay. By defeating a certain number of enemies or surviving for a set duration, players would randomly obtain various buffs or weapons. This approach prevents players from overfocusing on character systems while ensuring each playthrough feels fresh and distinct from the last.

<a id="user-story"></a>

### 2.2 User Story
Kill That Virus! (KTV) is a high-intensity roguelike survival game centered on core combat mechanics and a modular progression system. The system architecture is built around distinct functional Epics, including a core survival combat loop and dynamic progression that scales difficulty based on player performance. A key focus of the gameplay is maintaining constant tension, supported by features such as off-screen enemy spawning and real-time HUD statistics. To ensure a compelling player experience, the game utilizes threshold-based reward systems and randomized weapon combinations to keep each run unique. Finally, the project integrates distinct game states to effectively manage the transition from intense combat into a structured narrative-driven victory sequence.

<img width="1143" height="642" alt="01" src="https://github.com/user-attachments/assets/2facee7c-fe9e-434b-82ae-f86a31ced699" />
<img width="1144" height="672" alt="02" src="https://github.com/user-attachments/assets/40e3b476-f31b-47db-ac7c-c0e6fbdf4c21" />


### 2.3✨Stakeholders✨

<a id="stakeholders"></a>

Stakeholder Analysis via Onion Diagram

To ensure the successful delivery of Kill That Virus!, we conducted a stakeholder mapping exercise using an Onion Diagram. This allowed us to categorize individuals and entities based on their influence and proximity to the core system:

The Core System: Represents the internal game logic, including the state machine and the narrative victory sequence.

Direct Users & Team: Includes the Player, who seeks an engaging experience, and the Development Team, responsible for technical implementation and bug fixing.

Project Environment: Primarily consists of TAs and Lecturers. Their requirements for "Object-Oriented Design" and "Game Twist" significantly shaped our architectural decisions, such as the implementation of the Control Inversion mechanic.

External Environment: Encompasses global entities like Browser Vendors (Google/Chrome) and hosting platforms like GitHub Pages. Our design for asynchronous audio handling was a direct response to the Autoplay Policies enforced by this outermost layer.

<img width="1920" height="1080" alt="未命名" src="https://github.com/user-attachments/assets/2c0329f3-e80d-49f7-95e7-a00a67973e77" />

💡Game Twist: The Glitch System & Inverted Controls💡 "Our game's most distinctive feature is the 'Glitch System.' Far from being a mere aesthetic choice, it represents true system-level corruption. When triggered, the system does not merely distort the screen; it actively erodes the core input-output loop by forcing 'Inverted Controls.' Suddenly, the player’s muscle memory—typically their greatest asset in survival games—becomes their most challenging obstacle.

From an HCI perspective, this design induces what we define as a 'Mental Model Collapse.' By reversing the expected outcome of a player's action, we force them to actively inhibit habitual, reflexive responses. This requires the user to instantly re-learn the inverted logic, adapting under immense cognitive pressure. It bridges the gap between simply playing a game and experiencing a simulated system breakdown, making the player feel the true anxiety of a system under viral siege.

We chose the Glitch System as a core mechanic because it elevates gameplay beyond artificial difficulty inflation. It transforms 'system failure' into a rigorous test of cognitive agility. By forcing players to fight their own instincts, we turn the game's architecture into a powerful narrative tool, proving that the most compelling experiences often lie where the system breaks. This synthesis of technical execution and human-computer interaction design—where we intentionally challenge the user's understanding of the interface—is the heartbeat of our project, Kill That Virus!. It demonstrates our commitment to not just creating a functional game, but crafting an interactive experience that tests the very limits of user adaptation."

---

<a id="design"></a>

## 3. Design

<a id="architecture-overview"></a>

### 3.1 Architecture Overview:

Our system architecture adheres to a fundamental core principle: every functional component and gameplay mechanic must remain highly focused on Kill That Virus! to eliminate functional redundancy. This focused architectural approach ensures a transparent and direct relationship between specific event triggers, real-time player feedback, and seamless system state transitions. For instance, as a player successfully eliminates enemies, the resulting state change—specifically kill count accumulation—directly drives the progression into subsequent levels. This hierarchical and highly interdependent design allows the entire system to be effectively decomposed into manageable, modular subsystems rather than adhering to a complex, monolithic, and hard-to-maintain codebase.

<a id="class-design"></a>

### 3.2 Class Design:

Our class design prioritizes the principle of responsibility separation to manage the inherent complexity of a multi-stage infection battle. The Game Controller acts as the orchestrator, coordinating the main execution loop and overseeing the high-level gameState. The Player class encapsulates critical functionality, including movement physics, infection status (HP), and direct interactions with viral enemies. A dedicated Progression Component, operating within the system layer, serves as the single source of truth for the current kill count and various level thresholds, effectively translating gameplay performance into definitive state transitions. Other classes, such as the combat engine, represent domain-specific entities with their own autonomous update and collision behaviors. Finally, the UI/Victory layer, which encompasses the showComicBook module, presents the narrative conclusion and provides essential UI feedback based on these internal system states.

The most critical design decision made was to decouple the victory narrative from the core combat logic. Instead of embedding ending triggers inside every individual enemy destruction function, we implemented a centralized Progression Manager. This manager constantly monitors state changes and triggers the WIN state only when specific thresholds are successfully met. This design strategy keeps the codebase clean, reduces logical redundancy, and allows us to adjust level difficulty—such as required kills—in one central location without affecting underlying combat mechanics.

<img width="5506" height="5205" alt="Game Engine Architecture-2026-04-23-140625" src="https://github.com/user-attachments/assets/c9f39b2b-7c2b-4bbb-b307-bb3066ab95a9" />



**Key Design Patterns:**

Separation of Concerns: 

By segregating functionality into Entity (Player, Enemy), System (Collision, Combat), and Core (Scene Management) layers, we achieved low coupling across the project.

Scalability: 

This modularity ensures that adding new viral strains or narrative comic pages only requires configuration updates in the Data Layer (Pools) or index expansion in the Victory Module, without altering the core game loop.

<a id="state-machine-diagram"></a>

### 3.3: State Machine Diagram representing the Lifecycle of Game.

The State Machine Diagram shows the dynamic progression logic of Kill That Virus!. The system initializes at the START_MENU and transitions into a series of combat states (LEVEL_1 to LEVEL_3) based on kill count triggers. A significant state transition occurs upon completing Level 3, where the ProgressionManager hands over control to the showComicBook module. This architectural choice ensures that the narrative conclusion is treated as a distinct state, isolating the comic-rendering logic from the primary combat engine. Any failure state (HP ≤ 0) is globally handled by transitioning to GAME_OVER, allowing for a complete system reset back to the menu.

<img width="1216" height="677" alt="messageImage_1776350569213" src="https://github.com/user-attachments/assets/63489d14-62b4-4b89-b485-c679a5b60f96" />

<a id="behavioural-design"></a>

#### 3.3.1 Behavioural Design:

While the class diagram depicts the static structure, the behavioral design explains how critical gameplay events unfold. In our project, the most vital interaction is the Progression-to-Victory pipeline. This path begins when a valid collision results in an enemy's destruction, triggering a signal to the Progression Manager. Once identified that the kill count has reached the level-3 threshold, the system executes the triggerGameWin sequence. This involves a complex state shift: the combat loop is paused, the Ending BGM is initialized via user-start audio to satisfy browser security policies, and the Comic Controller assumes control of the rendering loop. This sequence demonstrates how a gameplay event propagates to become a state change and narrative feedback.

<img width="1250" height="667" alt="messageImage_1776344301852" src="https://github.com/user-attachments/assets/a5ed252b-f02e-4a8f-ba09-629cd422abd5" />

[The sequence diagram above illustrates the interaction between key modules during the gameplay transition]

<a id="level-progression-logic"></a>

#### 3.3.2 Level Progression Logic:

The dynamic progression of the game is governed by the checkProgress() method, which periodically evaluates performance metrics. In Level 2, for example, the system simultaneously monitors both the survival timer and the kill count, executing the goToLevel3() transition only when all criteria are met.

<a id="post-game-narrative-sequence"></a>

#### 3.3.3 Post-Game Narrative Sequence:

The victory sequence employs asynchronous resource handling and user input. Upon reaching the final threshold, the Progression Manager signals the VictoryScene. To comply with browser security regarding autoplaying audio, we implement userStartAudio() during the first user interaction to unlock the context for the Ending BGM. Furthermore, we implemented a Fade-to-Black algorithm using a comicFadeAlpha variable in the update loop for smooth visual transitions. To ensure Atomicity, assets are loaded asynchronously, and showComicBook() is only invoked by sceneSwitch() once the isLoaded state is confirmed, preventing narrative gaps.

---

<a id="implementation"></a>

## 4. Implementation

Our game, Kill that Virus(KTV), is a top-down 2D survival shooter. Players control a cell moving through a large, scrolling map, defending against waves of enemies and navigating increasingly difficult levels.


4.1 The First Challenge: Camera Tracking
Our game map is much larger than the visible canvas, so the camera must follow the player while only showing part of the world. This created a technical challenge because the game had to manage two coordinate systems at the same time: world coordinates and screen coordinates. Player movement, enemy positions, bullets, and collision detection all happen in world space, But the canvas only displays the area currently covered by the camera!

This caused several problems:

Mouse aiming had to be converted correctly from screen space to world space.
Enemy spawning had to happen outside the visible canvas but still remain inside the map boundaries.
Player movement also had to be limited by the world size rather than the canvas size.
All enemies, bullets, and background elements needed to stay visually synchronized while the camera was moving.
We solved this by introducing a camera offset system. The camera offset is calculated from the player’s position, allowing the player to stay near the center of the screen during normal movement. At the edges of the map, the offset is constrained so the camera does not show empty space outside the edge of map.

All gameplay logic, including movement, enemy AI, bullet trajectories, and collision checks, is updated in world coordinates. Rendering is handled separately by applying the camera translation before drawing the world. UI elements are drawn after this step, so they stay fixed on the screen. For mouse aiming, we adjust the mouse position using the camera offset before calculating the bullet angle.

This solution made movement, aiming, spawning, and rendering consistent across a larger map, and provided a stable foundation for later enemy and level systems.


4.2 The Second challenge: Enemy module design and refinement
As a shooter, the enemy module is undoubtedly a crucial part of the game mechanics. Through multiple iterations, we gradually refined the enemy mechanics and enriched the variety of enemies.

Phase 1: Spawning, Chase, Collision, and Health Mechanisms

First, we need to ensure the implementation of the most basic mechanics. This phase was accomplished using spawnEnemies() and updateEnemiesAndCombat(). In this phase, we implemented:

Enemies will periodically spawn outside the player's field of view.
Enemies will continuously move towards the player. When the distance between an enemy and the player is less than the sum of the radii of their respective areas, it is considered a collision; the enemy dies and disappears, and the player's health decreases.
When the distance between an enemy and a bullet fired by the player is less than the radius of the enemy's area, it is considered a collision; the bullet disappears, and the enemy's health decreases. When the enemy's health reaches 0, it dies and disappears.
Enemy health, spawn speed, and movement speed increase as the level progresses.
Phase 2: New Enemies, New Mechanics

Building on the achievements of the previous step, we must consider how to increase the fun of the enemies. This can be achieved by adding more enemies and implementing new mechanics. The achievements of this phase are as follows:

The const ENEMY_POOL was defined and populated in enemy-pool.js, defining three different enemy shapes and attributes: the basic enemy, the tank (high health but slow speed), and the fast enemy (low health but fast speed).
Particle effects and damage animations were introduced in drawGameContent(). When an enemy dies and disappears, a brief, scattered particle effect appears in its place; when an enemy collides with a bullet, it briefly turns white and flashes. These provide visual stimulation for the player.
The enemy spawn mechanism was modified. As the level progresses, there is a higher probability of spawning tanks and fast enemies, ensuring the game remains challenging.
Phase 3: More and Better Enemies and New Sound Effects

In the previous phase, although the enemy module was made more interesting, the simple, solid-color graphics were not aesthetically pleasing. Therefore, the next step is to optimize the art and music:

Two new enemies were introduced: the sprinter, which accelerates during a dash; and the splitter, which splits upon death.

Modified enemy appearance, replacing the original solid-color graphics with different 2D textures.

Plays a death sound effect when an enemy dies.


<a id="evaluation"></a>

## 5. ✍️Evaluation💭



<a id="sus-system-usability-scale"></a>

### 5.1 SUS(System Usability Scale)

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

Project advantages (Q3, Q7, Q9, Q4, Q6): 

The game is easy to use and the threshold is low. It adopts the common style of the industry, which reduces the cognitive cost of players. It only needs a brief introduction, and the novice teaching will be added to the starting interface. 
Good items (Q1, Q5, Q10): 

players' willingness to use, function integration needs to be improved. It is necessary to improve the playability and complexity of the game. 

At this stage, the later version will increase the playability and complexity of the game：

(1). Increase the types of weapons, from ordinary firearms at this stage to pistols, sniper rifles, daggers and grenades, etc.

(2). As the level increases, new enemies and new mechanisms are added to improve the difficulty of the game.

(3). Differential items (Q2, Q8):because the interface has not been introduced at this stage, and technical personnel still need to introduce the gameplay, so it is necessary to add a normative introduction process to assist players in getting started. At the same time, the operation fault tolerance design is added.


<a id="nasa"></a>

### 5.2 NASA

<img width="951" height="817" alt="image" src="https://github.com/user-attachments/assets/04c01bbd-5cc4-46f8-8208-6341cc988fbc" />


NASA-TLX Workload Assessment Mean scores with standard deviation (n participants)  
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

**1. High time pressure**

The overall score of the time pressure dimension in the evaluation is high, indicating that the task promotion rhythm, operation response window, level timing settings, etc. of the current game are beyond the adaptation range of some players, resulting in urgent negative experiences for players. 

Optimize the level timing design: cancel the forced timing of non-core links (such as scene exploration and prop selection), and only set reasonable timing in the core challenge links; and the timing threshold refers to the completion speed setting of the evaluator with a low score, and reserve buffer time.

**2. Differentiated and high value of frustration , Effort and Performance Satisfaction do not match**

The frustration score is highly scattered, This suggests that negative emotions mainly come from high failure costs, insufficient feedback, and sharp difficulty spikes, which hurt player retention. Too little positive payoff for the effort invested degrades the overall experience.
Optimize the failure/retry system to reduce sunk cost: after failing a level, let players restart from a key checkpoint instead of the very beginning.
Add more immediate positive feedback throughout: when players complete small actions — correct clicks, item pickups, mini-objectives — reinforce them with visual effects, short sound cues, and light numerical rewards, rather than only after the level. Even on mistakes, give gentle hints instead of accusatory messages.


**3. The score for the evaluator is very discrete.**

The scoring standard difference in all dimensions is high, indicating that the game experience of different players varies greatly.
Do layered design for players: when entering the game for the first time, players can choose the difficulty or skip the preliminary test level. Unify the core interaction logic, reduce experience deviations, let players form operating habits, and reduce experience deviations caused by interaction inconsistency.



<a id="testing"></a>

### 5.3 Testing

With the improvement of functions and pages in the future of the game, test codes will be added one after another to prevent errors, and the simple test code will be designed in the current version:

**1. White box test code**

It is used to verify internal functions and variable logic. The following code cases are only for display to test whether the player's initial health is correct and whether the position is in the middle:
```
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
```


**2. Black box test code**

It is used to verify the performance of the player's input and output function, and give a case: the player presses the D key, and the output effect is that the character moves four units to the right:
```
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
```

---

<a id="process"></a>



## 6. Process 

In this game development project, our five group members from demand conception, user research, function realization to code optimization iteration, the whole process is constantly adjusted to complete the game version that can be run at present.

<a id="discussion-process"></a>

### 6.1 Discussion process

Throughout the whole process of game production, we have established a standardized and fixed rhythm of discussion and reporting to ensure the transparency of the progress and the timely resolution of problems. The team uniformly uses Jira to record the progress of tasks, update the development status, track pending tasks and bugs, and ensure that all work online can be checked and visualized. At the same time, offline, we regularly report on the progress after class every Tuesday, and report that everyone has completed the content every week, the need to coordinate resources, and the current difficulties encountered and discussed solutions. And cooperate with WhatsApp and other social software to communicate in time. Ensure that the program is clear, the responsibility is allocated, and the problem is not delayed or left behind. Effectively avoid rework and delay in progress.

<a id="collaborative-tools"></a>

### 6.2 Use of collaborative tools

| Tool          | Uses                                                                 |
|---------------|----------------------------------------------------------------------|
| Jira          | Task management, progress tracking, kanban synchronization, issue recording and follow-up |
| Windows Paint | Game interface sketching, interaction diagram drawing, gameplay process mapping |
| GitHub        | Code hosting, branch development, multi-person collaborative programming, version rollback |
| J5            | Game logic development, function implementation, scene construction   |

We use a variety of tools to support development, design, collaboration and version management. Each tool has a clear division of labor to improve the overall efficiency. Among them, GitHub is the most important, which can provide a multi-person collaborative programming platform, so that each member can leave traces of work and can be changed back. Readme documents and code explanation documents can be submitted for group members to browse at any time, which greatly improves work efficiency.

<a id="division-of-labor"></a>

### 6.3 Division of Labor Among Team Members

In the early stage, we mainly focus on collective co-creation and democratic decision-making: the core gameplay, art style, plot framework and other contents of the game are determined through collective discussion, joint conception and voting to ensure that each member's ideas can be fully adopted. The README document of the project is also written and supplemented by team members, which ensures the consistency of the overall direction.

In the late stage of development, in order to improve efficiency and reduce cross-dependence, we adopt the method of drawing labor + modular development to split the game into independent modules and clarify the responsibilities of each member. The specific division of labor is as follows:

| Team Member    | Role                         | Module                              | Detailed Responsibilities                                                                 |
|----------------|------------------------------|-------------------------------------|-------------------------------------------------------------------------------------------|
| Jianjiang Yang | Player Character Development | Player Character & Auxiliary Systems| Implement character movement, attack, defense, healing and item systems; expand various attack methods and interaction logic |
| Zhanyu Xu      | Enemy System Development     | Enemies            | Refactor project; Design enemy-related mechanisms; Design status bar and gameover interface |
| Yize Yang      | UI Development               | Interface & Game Mode Flow          | Create start interface, story mode flow for the first two levels, reward interface for endless roguelike mode, etc. |
| Sinan Xu       | Art & Narrative Integration  | Art Assets & Storytelling           | Integrate visual effects, animations, images and map resources; build game scenes; improve plot text and presentation |
| Jack Feng      | Level & Difficulty Design     | Level Flow & Difficulty Tuning      | Design flow, rhythm and difficulty curve for the first two story levels; implement generation logic, progressive difficulty rules and reward mechanism for the third endless mode |


In GitHub collaboration, we develop by creating independent branches. Each member completes the development work in his own code file, and finally integrates it, which not only ensures that the development progress does not interfere with each other, but also makes the overall code structure more standardized and easy to maintain.

The project was developed based on modular labour division, with each team member responsible for independent functional modules. During later testing, the team encountered technical difficulties regarding the accurate calculation of map dimensions and player movement values. Through active communication and collaboration, all members jointly solved these technical problems. In the final stage, the team identified and fixed the player out-of-bounds bug, effectively optimizing gameplay and greatly improving game fluency and overall quality. Finally, a fully functional, stable and well-polished game was successfully delivered.

<a id="sustainability"></a>

## 7. Sustainability Analysis: The Five Dimensions

<a id="technical-dimension"></a>

### 7.1 Technical Dimension
* **Modular Architecture and Maintainability:** The project logic is partitioned into 19 core modules (e.g., combat.js, spawn.js), demonstrating high-cohesion and low-coupling design principles. This reduces the Technical Debt generated during system evolution.
* **Data-Driven Design and Extensibility:** By decoupling configuration through *enemy-pool.js* and *wave.js*, we have achieved flexible system scalability. This design aligns with the Extensibility metric in software sustainability, ensuring that adding new features in the future will not cause architectural collapse.
* **Efficiency Optimization:** Optimizations of particle systems and rendering paths in *ui.js* and *combat.js* effectively reduced CPU utilization, implementing the efficiency principles of Green Coding.

<a id="individual-dimension"></a>

### 7.2 Individual Dimension
* **User Agency:** The "Pick 1 of 3" Buff system in Roguelike mode provides players with strategic choices, enhancing their sense of control and engagement in the game.
* **Experience and Safety:** Through real-time UI feedback (e.g., *drawHealthBar* and *uiThermometerCold*), we ensure players maintain a clear understanding of the game state, reducing frustration. This contributes to maintaining user psychological health and game enjoyment.

<a id="social-dimension"></a>

### 7.3 Social Dimension
* **Community Engagement and Connectivity:** Our vision includes a "Multiplayer Mode," aimed at building social connections between players through technology, thereby strengthening the "Sense of Community".
* **Narrative Participation:** By guiding players through the game's world via comics (*showComicBook*), we facilitate resonance and deep communication regarding the scenarios created by the developers, promoting social participation.

<a id="economic-dimension"></a>

### 7.4 Economic Dimension
* **Long-term Commercial Value:** The planned "Monetization Strategy" and "Transmedia Franchise Development" fall under Innovation and R&D. This is not merely for short-term profit, but to build a sustainable, long-term economic business model.
* **Supply Chain Awareness:** Our Phase 2 planning includes potential collaborative partnerships with external brands. This reflects a long-term management mindset regarding the business ecosystem and Value Chain.

<a id="environmental-dimension"></a>

### 7.5 Environmental Dimension
* **Efficient Resource Utilization:** During development, we implemented image compression and asset preloading (*asset-loader.js*) to minimize the loading of redundant resources, representing a direct reduction in the software's environmental impact.
* **System Design Awareness:** We optimized image processing and computational logic to achieve the goal of "Min resources, Max utilization."

<a id="conclusion"></a>

## 8. Conclusion

Looking back on our project, it was an extremely meaningful experience. From the initial brainstorming and defining the direction, to project division, initial implementation, gradual progress, and finally, completing the game, we faced many difficulties and challenges throughout the process. However, we overcame them and learned from them, making the game better.

<a id="lessons-learnt"></a>

### 8.1 Lessons learnt

One of the most important lessons we learned in this project was teamwork. As a team project, it's impossible for everyone to have exactly the same ideas. This necessitates establishing a clear framework and development constraints to ensure that each member doesn't work independently but rather pools their efforts to collaboratively develop the project.

Furthermore, a regular review and feedback mechanism is crucial. A regular review mechanism ensures that the project develops systematically according to schedule and allows for modifications and adjustments to existing results based on feedback from other members, making the game more aligned with actual needs.

<a id="reflect-on-challenges"></a>

### 8.2 Reflect on challenges

A significant technical challenge encountered in the project was the enemy spawning mechanism. Specifically, enemies needed to spawn randomly in a location outside the player's line of sight, but not outside the edge of the map. Additionally, the enemy spawning probability was affected by the current level's progress. The later the level, the lower the probability of low-level enemies spawning and the higher the probability of high-level enemies spawning. To address this challenge, we adopted a gradual improvement approach. We first designed the initial spawn and enemy type selection mechanism. After internal testing, team members provided feedback. Based on this feedback and referencing common design principles in similar survival shooters, we adopted a more reasonable spawn and enemy type selection mechanism.

Another challenge was camera tracking. We wanted the camera to constantly follow the player's movement. We introduced a camera offset system and always used world coordinates. Player movement, enemy positions, and bullet trajectories are all updated in world space, and rendering is done using camera transformations. This approach ensures smooth gameplay and visual consistency, even as map size, enemy numbers, and level complexity increase.

<a id="future-work"></a>

### 8.3 Future Work

In the short term, we will prioritize improving the current game's playability and balance, such as adding more enemy types, optimizing the level difficulty curve, improving the buff selection interface, and adding clearer operation prompts and combat feedback. Simultaneously, we also hope to add more statistical information, such as kill count, survival time, and damage taken, to make it easier for players to understand their performance.

If given the opportunity to develop a sequel, we hope to expand upon the current game system with a more complete system, such as adding terrain mechanics, bosses and elite enemies, equipable items, an enemy encyclopedia, character progression paths, and richer level themes. This way, the sequel wouldn't just be an increase in content quantity, but could evolve into a more complete and strategic survival shooter.

---

<a id="contribution-statement"></a>

## 9. Contribution Statement

| Team Member     | Contribution |
| --------------- | ------------ |
| Jack Feng       | 1.2          |
| Zhanyu Xu       | 1.2          |
| Sinan Xu        | 1.1          |
| Yize Yang       | 1.0          |
| Jianjiang Yang  | 1.0          |

---

<a id="ai-statement"></a>

## 10. AI Statement
Throughout the project development process, we used artificial intelligence (AI) to assist our work in a rational, transparent, and prudent manner. AI was not used to replace the team’s own design decisions or core implementation work, but rather as a supporting tool to improve efficiency, explore alternatives, and refine specific parts of the project.

In the early stages of the project, we used AI to help us concretize the game's concepts and assess the feasibility and difficulty of developing various systems, assisting us in selecting modules. Furthermore, AI played a significant role in architectural decisions, helping us construct a clear and reasonable project architecture and module division of labor, which facilitated subsequent collaboration.

During the development phase, to improve the game's visual presentation and player experience, we used AI to generate some art assets. More specifically, the game's map, bullets, and enemies were all drawn by team members, while the shield, pills, and weapon switch icons in the player's status bar were generated by GPT Image 2, and the player's shield texture was generated by DouBao.

In summary, we used AI to reduce repetitive and low-level work, support idea generation, check text quality, and improve selected visual effects. AI participated in the project as a learning and assistive tool. All core creative decisions, gameplay design choices, technical implementations, and final evaluations were made by our team.
