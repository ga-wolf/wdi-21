class CalcController < ApplicationController
  def arithmetic
    @first_num = params["first_num"].to_f
    @second_num = params["second_num"].to_f
    @operation = params["operation"]

    @result = case @operation
    when "+" then @first_num + @second_num
    when "-" then @first_num - @second_num
    when "divide" then @first_num / @second_num
    when "*" then @first_num * @second_num
    end


    # if @operation == "+"
    #   @result = @first_num + @second_num
    # elsif @operation == "-"
    #   @result = @first_num - @second_num
    # elsif @operation == "*"
    #   @result = @first_num * @second_num
    # elsif @operation == "divide"
    #   @result = @first_num / @second_num
    # end

  end
end
