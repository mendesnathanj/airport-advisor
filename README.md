# [Airport Advisor](http://airport-advisor.herokuapp.com/)

![Demo](readme_photos/start-end.gif)

## Background and Overview

Flying can be a very stressful experience.

Oftentimes, travelers may find it much easier if they have information on the services of the airport they are visiting before they travel. Airport Advisor allows travelers to get useful information from fellow travelers about the airports they are going to visit, as well as share their own experiences.

The site will feature easy searching and navigation so a user can view ratings on different categories. Users may also help others by reviewing airports as well.

## Functionality & MVP

- [ ] Search bar with autofill that allows you to search airport by name and airport IATA code
- [ ] Users can leave a review, along with ratings, and view others' reviews and ratings
- [ ] Filter for reviews based on keywords

## Technologies & Technical Challenges

### Backend: Node, Express, MongoDB

For the backend, we will be using a Node server that utilizes the Express framework for routing and mongoDB for storing data.

### Frontend: React, Redux, Trip Advisor API

For the frontend, we will be using React and Redux as our main frameworks and will be utilizing the Trip Advisor API for displaying various data for information we will not be storing in our backend.

### Technical challenges we will face include:

Parsing the large amount of airport data that we will have stored on the backend

#### Splash Page

How to signup and login:

![Login and signup](readme_photos/login-signup.gif)

Login modal closes when user is loged in with this function:

```
let modalOpen = true;
window.store.subscribe(() => {
    if(window.store.getState().session.isAuthenticated && modalOpen) {
    modalOpen = false;
    props.closeModal();
    }
});
```

#### Search Bar / Autocomplete

Search bar
![Search Bar](readme_photos/search.png) 

Result for a particular airport

![Result for a particular airport](readme_photos/general_review.png)

```
search() {
    if (this.state.searchTerm === '') return;
    if (this.state.searchItems.length === 0) return;

    let query = this.state.searchItems.map((airport) => airport._id).slice(0, 10);
    query = query.join(',');

    this.props.history.push({
      pathname: '/airports',
      search: `?term=${this.state.searchTerm}&query=${query}`
    });

    this.clear();
}

clear() {
    this.setState({ searchTerm: "", searchItems: [] });
}
```

#### Creating and Editing Review

Creating a review


![Createing a review](readme_photos/each_review1.png)

Posting the review

![Posting the Review](readme_photos/each_review2.png)

For showing how many characher left on review box on texbox component this code snipped used:

```
    this.state = { wordsLeft: 666 - this.props.review.length };
``` 

Edit and delete buttons

Deleting and editing posts:

![Delete and edit](readme_photos/demologin-edit-delete-review.gif)

Filtering in the reviews

![Filter in reviews](readme_photos/review_show.png)


## Group Members & Work Breakdown

- Dilan Balci (Backend engineer)
- Hyo Lim Jeong (Backend engineer)
- Terry Chow (Frontend engineer)
- Nathan Mendes (Frontend engineer)

Used git feature branch workflow technique for collaboration.

![Working Tree](readme_photos/work_flow.png)
