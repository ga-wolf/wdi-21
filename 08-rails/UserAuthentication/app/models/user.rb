class User < ApplicationRecord
  has_secure_password
  # This requires the gem 'bcrypt'
  # It takes a password and a password_confirmation
    # If those two things are the same
      # It encrypts them, then saves the encrypted version in the password_digest field

  has_many :posts
end
