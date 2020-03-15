use assignment_1

// Question 1
db.createCollection('Tweets')

// Question 3
db.Tweets.find()

// Question 4
db.Tweets.find({"user.name": "user 07"})

// Question 5
db.Tweets.update({"user.name": "user 14"}, {$set:{"entities.hashtags": "My number 1 tweet"}})

// Question 6
db.Tweets.find({"entities.hashtags": {$exists: true, $ne: []}})

// Question 7
db.Tweets.find({"user.location": "Internet"}).limit(5).pretty()

// Question 8 
db.Tweets.find({"user.id": {$gt: 200000000000, $lt: 300000000000}})

// Question 9
db.Tweets.find({"created_at": {$regex: /^Thu/}}, {"id_str": 1, "user.name": 1, "user.location": 1})

// Question 10
db.Tweets.find({"text": {$regex: "health"}}, {"id_str": 1}).limit(5)



