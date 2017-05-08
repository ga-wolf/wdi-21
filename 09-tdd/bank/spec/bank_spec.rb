require 'pry'
require_relative '../bank'

describe Bank do
  let(:bank) do
    Bank.new "RSpec Bank"
  end
  # This will create a local variable in every "it" block called bank, and it will be set to Bank.new "RSpec Bank"

  describe ".new" do
    it "should create a new instance of the bank" do
      expect(bank).to_not eq nil
    end

    it "should be assigned a name as an instance variable" do
      expect( bank.name ).to eq "RSpec Bank"
    end

    it "should start with no accounts" do
      expect( bank.accounts.size ).to eq(0)
    end
  end

  describe "#create_account" do
    it "should create an account with a given name and a given balance" do
      bank.create_account( "Gerry", 200 )
      expect( bank.accounts["Gerry"] ).to eq 200
    end
  end

  describe "#balance" do
    it "should return the current balance for a given account" do
      bank.create_account("Gerry", 200)
      balance = bank.balance("Gerry")

      expect(balance).to eq 200
    end
  end

  describe "#deposit" do
    it "should deposit a given amount into a customer's account" do
      bank.create_account "Gerry", 200
      bank.deposit "Gerry", 100

      balance = bank.balance("Gerry")
      expect(balance).to eq 300
    end
  end

  describe "#withdraw" do
    context "valid withdrawal" do

      it "should withdraw a given amount from a customer's account" do
        bank.create_account("Bill Murray", 200)
        bank.withdraw("Bill Murray", 100)
        balance = bank.balance "Bill Murray"

        expect(balance).to eq 100
      end

    end

    context "invalid withdrawal" do

      it "should ignore requests for withdrawal when the requested amount exceeds the current balance" do
        bank.create_account("Bill Murray", 200)
        bank.withdraw("Bill Murray", 1_000_000)
        balance = bank.balance "Bill Murray"
        expect(balance).to eq 200
      end
    end
  end
end
