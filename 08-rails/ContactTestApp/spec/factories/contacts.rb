FactoryGirl.define do
  factory :contact do
    first_name "John"
    last_name "Doe"
    sequence(:email) { |n| "johndoe#{n}@ga.co" }

    # Any time I create a new contact with FactoryGirl
      # I want to create three associated phones
        # :home_phone
        # :office_phone
        # :mobile_phone
        
    after(:build) do |contact|
      FactoryGirl.create :home_phone, contact: contact
      FactoryGirl.create :office_phone, contact: contact
      FactoryGirl.create :mobile_phone, contact: contact
    end


  end
end
