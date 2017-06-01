FactoryGirl.define do
  factory :phone do
    # Anytime you use the phone factory, I want to generate an associated contact
    association :contact
    # This relies on:
      # You saying that a phone belongs_to a :contact
      # You have a valid :contact factory

    phone { Faker::PhoneNumber.phone_number }

    factory :home_phone do
      phone_type "Home"
    end

    factory :office_phone do
      phone_type "Office"
    end

    factory :mobile_phone do
      phone_type "Mobile"
    end

  end
end
