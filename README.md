# 2026-group-9
2026 COMSM0166 group 9

<img width="1920" height="1080" alt="MainMenu" src="https://github.com/user-attachments/assets/7d509195-b73f-4de7-8836-eb1c6b9c4b80" />

🔗[Link of Latest version of the Game!]

https://uob-comsm0166.github.io/2026-group-9/

📝[Link of our Kanban board]

(https://offjjx.atlassian.net/jira/software/projects/SCRUM/boards/1?atlOrigin=eyJpIjoiZjQ5MmMyOTljMzQ2NGY1OTkwZGIzM2Y1NTIyNjUzOWYiLCJwIjoiaiJ9)

## ☣️KTV☣️

KTV☣️:Kill that Virus is a Roguelike game inspired by Vampire Survivors and Plague Inc. 
You play as a single cell within the human body, 
on a mission to purge all foreign pathogens and impurities. 
Players can dive into the Story Mode to experience a meticulously designed plot full of twists and turns, 
or test their limits in Endless Mode for a pure, adrenaline-pumping Roguelike combat experience.
Across both modes, players can enjoy the following signature features crafted by our team:

☣️Diverse Arsenal: A wide variety of weapons to choose from.

🧪Miraculous Items: Power-ups with unique and awesome effects.

✏️Hand-Drawn Environments: Game scenes 100% hand-painted by our development team.

💀Escalating Challenges: Enemies that grow increasingly difficult as you progress.

😈Intense Boss Fights: Heart-pounding encounters against massive pathogens.

📗Educational Trivia: Fun facts and insights into how the human body works.

And many more hidden surprises!
In KTV, the gameplay experience evolves based on your actions and choices. 
As your capabilities grow, the enemies and levels will 
continuously challenge your reflexes and tactical skills. 
We strive to deliver a unique, heart-racing, and addictive experience for every player!

—Purge or be purged. The choice is yours.—
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

### Introduction

- This game is based on Vampire Survivors and expands on the original gameplay with richer content and more diverse mechanics. It is a top-down 2D survival game in which players only need to use the WASD keys to control the character’s movement and the mouse to point toward enemies; the character will then attack automatically without additional input. Enemies continuously spawn outside the player’s field of view and quickly move toward the character to launch attacks. Whenever the character takes damage, their health bar decreases, and if health reaches zero, the run ends.
- The core innovation of our game lies in the deep integration of classic roguelike elements into the original structure. Once the game starts, it proceeds in real time without pausing, creating a tense and immersive experience. After defeating a certain number of enemies, players earn rewards such as new weapons, passive items, or buffs that enhance their combat ability. As time passes, they face increasingly powerful and numerous enemy waves. Each run features random upgrades and enemy combinations, ensuring that no two playthroughs feel the same. 

### Requirements 

- 15% ~750 words
- Early stages design. Ideation process. How did you decide as a team what to develop? Use case diagrams, user stories. 

### Design

- 15% ~750 words 
- System architecture. Class diagrams, behavioural diagrams. 

### Implementation

- 15% ~750 words

- Describe implementation of your game, in particular highlighting the TWO areas of *technical challenge* in developing your game. 

### ✍️Evaluation💭

- 15% ~750 words

Qualitative Analysis: Think Aloud

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

### Process 

- 15% ~750 words

- Teamwork. How did you work together, what tools and methods did you use? Did you define team roles? Reflection on how you worked together. Be honest, we want to hear about what didn't work as well as what did work, and importantly how your team adapted throughout the project.

### Conclusion

- 10% ~500 words

- Reflect on the project as a whole. Lessons learnt. Reflect on challenges. Future work, describe both immediate next steps for your current game and also what you would potentially do if you had chance to develop a sequel.

### Contribution Statement

- Provide a table of everyone's contribution, which *may* be used to weight individual grades. We expect that the contribution will be split evenly across team-members in most cases. Please let us know as soon as possible if there are any issues with teamwork as soon as they are apparent and we will do our best to help your team work harmoniously together.

### Additional Marks

You can delete this section in your own repo, it's just here for information. in addition to the marks above, we will be marking you on the following two points:

- **Quality** of report writing, presentation, use of figures and visual material (5% of report grade) 
  - Please write in a clear concise manner suitable for an interested layperson. Write as if this repo was publicly available.
- **Documentation** of code (5% of report grade)
  - Organise your code so that it could easily be picked up by another team in the future and developed further.
  - Is your repo clearly organised? Is code well commented throughout?
