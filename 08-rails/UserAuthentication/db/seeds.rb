User.destroy_all

u1 = User.create(name: "Bill", email: "bill@ga.co", password: "chicken", password_confirmation: "chicken")

u2 = User.create(name: "Admin", email: "admin@ga.co", password: "password", password_confirmation: "password")

u3 = User.create(name: "Jane", email: "jane@ga.co", password: "chicken", password_confirmation: "chicken")

p u1.password_digest
p u2.password_digest
  # Bono would be proud that we are encrypting his password
p u3.password_digest
