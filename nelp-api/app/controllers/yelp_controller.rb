require 'rest-client'

class YelpController < ApplicationController

  def url
    url = 'https://api.yelp.com/v3/businesses/search'
  end

  def token
    "cFier9NbCLqjEtEneUD-n7q1apHSKR7V84mGt0MYbLEU6Ctmwqw_Gxcb5nd0Hp_ksZzMyjns6spw5awOZQI_d_kZvn4VgnJbLRXovg705jtQdE-Z-SHDR3wVPWKjWXYx"
  end

  def hit_yelp
    response = RestClient.get(url, {'Authorization': "Bearer #{token}", params:{ location: params[:location], term: params[:term] } })

    render json: response
  end

end
