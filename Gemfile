source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

# ruby '2.6.0'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.2'

# Use Puma as the app server
gem 'puma', '~> 3.11'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
# gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use ActiveStorage variant
# gem 'mini_magick', '~> 4.8'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS),
# making cross-origin AJAX possible
# gem 'rack-cors'

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'devise'
gem 'foreman'
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
# database
gem 'mongoid'
group :development do
  gem 'listen'
  gem 'pry-rails'
  gem 'rubocop'
  gem 'spring'
  gem 'spring-watcher-listen'
end
group :test do
  gem 'database_cleaner'
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'rails-controller-testing'
  gem 'rspec-rails'
  gem 'shoulda'
  gem 'shoulda-matchers'
end
group :development, :test do
  gem 'byebug', platforms: %I[mri mingw x64_mingw]
end
group :doc do
  gem 'rdoc'
end
