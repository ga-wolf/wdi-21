require 'rails_helper'

RSpec.describe Phone, type: :model do

  it "has a valid factory" do
    phone = FactoryGirl.build :phone
    expect( phone ).to be_valid
  end

  it "is able to access the correct contact" do
    # Create a contact
    contact = FactoryGirl.create :contact
    # Create a phone (and make sure you mention that the contact is the contact you just created - use the way that we set email to be nil as an example)
    phone = FactoryGirl.create :phone, contact: contact
    # I expect the phone's contact, to be the contact that I created
    expect( phone.contact ).to be(contact)
  end

end
