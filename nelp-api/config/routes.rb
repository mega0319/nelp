Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/yelp_request' => 'yelp#hit_yelp'
end
