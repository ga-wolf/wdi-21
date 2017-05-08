require 'pry'

class Bank
  attr_accessor :name, :accounts

  def initialize( name )
    @name = name
    @accounts = {}
  end

  def create_account( name, balance )
    @accounts[ name ] = balance
    # Adding a new key into the accounts hash
  end

  def balance( name )
    @accounts[ name ]
  end

  def deposit( name, value )
    @accounts[ name ] += value
  end

  def withdraw( name, value )
    @accounts[ name ] -= value if value <= @accounts[name]
  end
end
