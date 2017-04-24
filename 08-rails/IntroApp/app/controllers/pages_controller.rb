class PagesController < ApplicationController
  def home
  end

  def about
  end

  def random
    colors = ["rebeccapurple", "gainsboro", "tomato", "chartreuse", "dodgerblue", "lemonchiffon"]
    @chosen_color = colors.sample()
  end
end
