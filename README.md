# Hello!

nomadcoffee-backend

## User:

- [x] Create Account
- [x] See Profile
- [x] Login
- [x] Edit Profile
- [x] Change Avatar (Image Upload)
- [x] Follow User
- [x] Unfollow User
- [ ] Search Users
- [ ] See Followers
- [ ] See Following

## Photos:

- [ ] See Photo
- [ ] Upload Photo
- [ ] Edit Photo
- [ ] Like / Unlike Photo
- [ ] See Photo Likes
- [ ] See Feed
- [ ] Search Photos
- [ ] See Hashtags

## Photos:

- [ ] Comment on Photo
- [ ] Edit Comment
- [ ] Delete Comment

## 4th Submission

- [x] Follow / Unfollow functionality
- [x] followers & following computed fields with pagination on the seeUser resolver (No extra resolvers)
- [x] Implement searchUsers resolver

## 5th Submission
### Task One: Models
- [ ] Create a Category model with a relationshops to CoffeeShop
- [ ] Create a CoffeeShop model with a relationship to the User that created the CoffeeShop and relationships to Category
- [ ] Create a CoffeeShopPhoto model with a relationship to the CoffeeShop

### Task Two: Resolvers
- [ ] createCoffeeShop should create a CoffeeShop, it should create a Category if it does not exist (the same way we created Hashtags on #6.4 and should upload and create a CoffeeShopPhoto for each uploaded file.
- [ ] seeCoffeeShops should list all the CoffeeShop with pagination.
- [ ] seeCoffeeShop should get a CoffeeShop by id.
- [ ] seeCategory should list all the CoffeeShop inside of a Category with pagination.
- [ ] seeCategories should list all the Category and should have a totalShops computed field that counts all the CoffeeShop inside of the Category, it should also have pagination
- [ ] editCoffeeShop should edit a CoffeeShop