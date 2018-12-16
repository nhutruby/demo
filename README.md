# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
# rubocop
default 53 offenses
# install
rails new demo --api --skip-active-record 
rbenv install jruby-9.2.5.0
group :test do
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'rspec-rails', '3.6.0'
  gem 'shoulda'
  gem 'shoulda-matchers'
  gem 'rails-controller-testing'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem 'devise'
gem 'mongoid'
rails g rspec:install
rails g mongoid:config
    config.generators do |g|
      g.orm :mongoid
      g.test_framework :rspec, fixture: true
      g.fixture_replacement :factory_bot, dir: 'spec/factories'
      g.view_specs false
      g.helper_specs false
      g.stylesheets = false
      g.javascripts = false
      g.helper = false
    end
rails g devise:install
rails g devise User
bundle exec rspec spec/models/user_spec.rb

# bugs
rspec
Failure/Error: require File.expand_path('../../config/environment', __FILE__)
NoMethodError:
  undefined method `new' for BigDecimal:Class
with ruby 2.6.0
return ruby 2.5.3
