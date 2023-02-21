Rails.application.routes.draw do
  # Nest blog-related things under /blog
  scope '/blog' do
    root to: 'articles#index', as: :blog
    resources :articles
  end
  # Defines the root path route ("/")
  root to: 'home#index'
end
