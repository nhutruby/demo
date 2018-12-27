FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    password '1234567a'
    password_confirmation '1234567a'
    first_name Faker::Name.first_name
    surname Faker::Name.last_name
  end
end
