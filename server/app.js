Meteor.publish('posts', function(id){
  var options = {};

  if(id)
    options._id = id;

  return Posts.find(options, {sort: {createdAt: -1}});
});

Meteor.publish('singlePost', function(slug){
  check(slug, String);
  return Posts.find({slug: slug});
});

Meteor.publish('singlePostById', function(id){
  check(id, String);
  return Posts.find({_id: id});
});


Meteor.publish('myPosts', function(){
  return Posts.find({user_id: this.userId});
});

Meteor.publish('users', function(){
  return Meteor.users.find({},
    {fields: {username: 1}
  });
});
