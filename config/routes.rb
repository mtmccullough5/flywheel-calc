Rails.application.routes.draw do
  namespace :api do
    get 'materials/create'
    get 'materials/update'
    get 'materials/destroy'
    get 'materials/get_properties'
    get 'materials/index'
  end
  namespace :api do
    #API ROUTES SHOULD GO HERE
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
