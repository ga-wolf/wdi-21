User.destroy_all

u1 = User.create(name: "Bill", email: "bill@ga.co", password: "chicken", password_confirmation: "chicken")

u2 = User.create(name: "Admin", email: "admin@ga.co", password: "password", password_confirmation: "password")

u3 = User.create(name: "Jane", email: "jane@ga.co", password: "chicken", password_confirmation: "chicken")

p u1.password_digest
p u2.password_digest
  # Bono would be proud that we are encrypting his password
p u3.password_digest

Post.destroy_all

p1 = Post.create(heading: "Post One", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi porro at incidunt, nostrum quasi consectetur architecto debitis, temporibus tempore eveniet in quis veritatis! Nostrum aliquid, rem enim, beatae nesciunt quos!", user_id: u1.id)
p2 = Post.create(heading: "Post Two", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi porro at incidunt, nostrum quasi consectetur architecto debitis, temporibus tempore eveniet in quis veritatis! Nostrum aliquid, rem enim, beatae nesciunt quos!", user_id: u2.id)
p3 = Post.create(heading: "Post Three", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi porro at incidunt, nostrum quasi consectetur architecto debitis, temporibus tempore eveniet in quis veritatis! Nostrum aliquid, rem enim, beatae nesciunt quos!", user_id: u3.id)
