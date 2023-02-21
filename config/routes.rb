Rails.application.routes.draw do
  # Defines the root path route ("/")
  root 'articles#index'
  scope '/blog' do
    resources :articles
  end
end
