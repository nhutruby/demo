require 'constraints/versions'

Rails.application.routes.draw do
  devise_for :users
  namespace :api,
            defaults: { format: :json },
            path: '/' do
    scope module: :v1,
          constraints: Versions.new(version: 1, default: true) do
      resources :users, only: %i[show create update destroy]
      resources :sessions, only: %i[create destroy]
    end
  end
end
