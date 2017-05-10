class MessagesController < ApplicationController
  def dynamic
  end

  def index
    @all_messages = Message.all

    respond_to do |format|
      format.html
      format.json { render json: @all_messages }
    end

  end

  def show
    @message = Message.find_by(id: params[:id])

    respond_to do |format|
      format.html
      format.json { render json: @message }
    end

  end
end
