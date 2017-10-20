# Online School Template

The "Margaret Hamilton Interplanetary Academy of JavaScript" uses Sequelize, Express, React, React-Redux, and CSS (Flexbox).

## Getting started

Video walkthrough: https://www.youtube.com/watch?v=_ve0UOawS9g&feature=youtu.be

1. Fork and clone this repo
2. Run `npm install` to install all modules
3. Run `node seed.js` to seed the database
4. Run `npm start` to sync the database and start the server

### Database Design

- Students
  * have profile info (name, age, email)
  * are assigned to a campus

- Campuses
  * have info such as a name, location, and image
  * can have many students assigned (may have none)

### Views and Functionality
#### See Wireframes folder for visual

- Navigation: as a user I...
  * will land on **Home** by default
  * can navigate to **Campuses** from **Home**
  * can navigate to **Students** from **Home**
  * can navigate to view a **Single Campus** from **Campuses**
  * can navigate to view a **Single Student** from **Students**
  * can navigate to view a **Single Student** from **Single Campus** (for any student at that campus)
  * can navigate to view that student's **Single Campus** from **Single Student**

- Views: as a user I...
  * see a list of all campuses on the **Campuses** view
  * see a list of all students on the **Students** view
  * see details about a campus on the **Single Campus** view, including that campus's students
  * see details about a student on the **Single Student** view, including that student's campus

- Actions: as a user I...
  * can create a campus
  * can edit a campus's info, including adding/removing a student to/from that campus
  * can delete a campus
  * can create a student
  * can edit a student's info, including the campus that student is assigned to
  * can delete a student

### Routes

```
GET
- all campuses
- a campus by id
- all students
- a student by id
```

```
POST
- new campus
- new student
```

```
PUT
- updated student info for one student
- updated campus info for one campus
```

```
DELETE
- a campus
- a student
```
