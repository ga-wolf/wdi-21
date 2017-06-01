class ContactsController < ApplicationController
  def index
    @contacts = Contact.all
    # Accessible with assigns(:contacts) in the test suite
    respond_to do |format|
      format.html
      format.json { render json: @contacts }
    end
  end

  def show
    # @contact in the controller is equal to assigns(:contact) in the test
    @contact = Contact.find_by id: params[:id]
  end

  def new
    @contact = Contact.new
    # .to be_a_new(Contact)
  end

  def create
    @contact = Contact.new(contact_strong_params)
    if @contact.save
      # redirect_to "/contacts/#{@contact.id}"
      redirect_to @contact
    else
      render :new
    end
  end

  def edit
    @contact = Contact.find_by id: params[:id]
  end

  def update
    @contact = Contact.find_by id: params[:id]
    if @contact.update contact_strong_params
      redirect_to @contact
    else
      render :edit
    end
  end

  def destroy
    contact = Contact.find_by id: params[:id]
    contact.destroy
    redirect_to '/contacts'
  end

  private

  def contact_strong_params
    params.require(:contact).permit(:email, :first_name, :last_name)
  end
end
