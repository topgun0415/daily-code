class HomeController < ApplicationController
  def index
  end

  def hello
    @check = true
    @message = 'Hello this is working well'
  end
end
