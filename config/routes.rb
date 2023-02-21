Rails.application.routes.draw do
  # Defines the root path route ("/")
  root to: 'home#index'

  devise_for :users, controllers: { registrations: 'registrations' }
  # Nest blog-related things under /blog
  scope '/blog' do
    root to: 'articles#index', as: :blog
    resources :articles
  end
end
