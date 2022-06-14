Rails.application.routes.draw do
  # 주소로 처음 들어가면 HomeController에서 index 액션에 연결해주세요
  get '/' => 'home#index'
  get '/hello' => 'home#hello'
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
end
