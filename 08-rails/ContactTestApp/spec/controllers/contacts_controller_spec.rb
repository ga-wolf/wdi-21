require 'rails_helper'

RSpec.describe ContactsController, type: :controller do

  describe "GET #show - /contacts/:id" do
    it "assigns the correct contact to @contact" do
      # Everytime the test suite runs, it deletes all contacts

      # I need to create a contact
      contact = FactoryGirl.create :contact
      # I need to fake a request to the show page for that particular contact
      get :show, params: { id: contact.id }
      # I need to make sure that @contact is defined
      # assigns(:contact) in tests, is equal to @contact in the controller
      expect(
        assigns(:contact)
      ).to eq(contact)
    end

    it "renders the show template - contacts/show.html.erb" do
      contact = FactoryGirl.create :contact
      get :show, params: { id: contact.id }
      expect(
        response
      ).to render_template(:show)
    end
  end

  describe "GET #index - /contacts" do
    it "should populate an array of all contacts" do
      groucho = FactoryGirl.create :contact, first_name: "Groucho"
      harpo = FactoryGirl.create :contact, first_name: "Harpo"

      get :index

      expect(
        assigns(:contacts) # @contacts = Contact.all
      ).to match_array([ groucho, harpo ])
    end

    context "format: html" do

      it "should render the index.html.erb page" do
        get :index
        expect(response).to render_template(:index)
      end

    end

    context "format: json" do

      it "should render JSON that includes all contacts" do
        contact = FactoryGirl.create :contact
        get :index, format: :json
        expect(
          response.body
        ).to eq( [contact].to_json )
      end

    end

  end

  describe "GET #new - /contacts/new" do
    it "assigns a new contact to @contact" do
      get :new
      expect(
        assigns(:contact)
      ).to( be_a_new(Contact) )
    end

    it "renders the new template - contacts/new.html.erb" do
      get :new
      expect(response).to render_template(:new)
    end
  end

  describe "GET #edit - /contacts/:id/edit" do
    # Setup
      # Create a contact
    # Execution
      # get request, set params[:id]
    # Validation
      # assigns(:contact)
    # Cleanup

    it "assigns an existing contact to @contact" do
      contact = FactoryGirl.create :contact
      get :edit, params: { id: contact.id }
      expect(
        assigns(:contact)
      ).to eq(contact)
    end

    it "renders the edit template" do
      contact = FactoryGirl.create :contact
      get :edit, params: { id: contact.id }
      expect(
        response
      ).to render_template(:edit)
    end
  end

  describe "POST #create - /contacts" do
    context "with valid attributes" do
      it "saves the new contact in the database" do

        old_contact_count = Contact.count
        post :create, params: {
          contact: FactoryGirl.attributes_for(:contact)
        }
        expect( Contact.count ).to eq( old_contact_count + 1 )

      end

      it "redirects to contacts#show for the new contact" do
        post :create, params: {
          contact: FactoryGirl.attributes_for(:contact)
        }
        expect(
          response
        ).to redirect_to contact_path( assigns(:contact) )
        # I expect the controller to redirect to the show page for @contact
      end
    end

    context "with invalid attributes" do
      it "does not save the new contact in the database" do

        expect {
          post :create, params: {
            contact: FactoryGirl.attributes_for(:contact, first_name: nil)
          }
        }.not_to change(Contact, :count)

      end

      it "re-renders the new template" do
        post :create, params: {
          contact: FactoryGirl.attributes_for(:contact, first_name: nil)
        }
        expect(
          response
        ).to render_template(:new)
      end
    end
  end

  describe "PUT #update - /contacts/:id" do
    before :each do
      @contact = FactoryGirl.create :contact, first_name: "Groucho", last_name: "Marx"
    end

    context "with valid attributes" do
      it "locates the correct contact" do
        put :update, params: {
          id: @contact.id,
          contact: FactoryGirl.attributes_for(:contact, first_name: "Harpo")
        }
        expect(
          assigns(:contact)
        ).to eq(@contact)
      end

      it "changes @contact's attributes" do
        put :update, params: {
          id: @contact.id,
          contact: FactoryGirl.attributes_for(:contact, first_name: "Harpo")
        }
        @contact.reload
          # Check for changes in the database!
        expect(@contact.first_name).to eq("Harpo")
      end

      it "redirects to @contact's show page" do
        put :update, params: {
          id: @contact.id,
          contact: FactoryGirl.attributes_for(:contact, first_name: "Harpo")
        }
        expect(
          response
        ).to redirect_to( @contact )
        # I expect the request above to force a redirection to the show page for @contact
      end
    end

    context "with invalid attributes" do
      it "does not update the contact's attributes" do
        put :update, params: {
          id: @contact.id,
          contact: FactoryGirl.attributes_for(:contact, first_name: nil)
        }
        @contact.reload
        expect(@contact.first_name).to eq "Groucho"
      end

      it "re-renders the edit template" do
        put :update, params: {
          id: @contact.id,
          contact: FactoryGirl.attributes_for(:contact, first_name: nil)
        }
        expect(response).to render_template(:edit)
      end
    end
  end

  describe "DELETE #destroy - /contacts/:id" do
    before :each do
      @contact = FactoryGirl.create :contact
    end

    it "deletes the contact" do
      expect {
        delete :destroy, params: { id: @contact.id }
      }.to change(Contact, :count).by( -1 )
    end

    it "redirects to the index page for contacts" do
      delete :destroy, params: { id: @contact.id }
      expect(response).to redirect_to("/contacts")
    end

  end

end
