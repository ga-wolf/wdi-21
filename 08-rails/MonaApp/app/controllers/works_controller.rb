class WorksController < ApplicationController
  def index
    # Find all works
    @all_works = Work.all
  end

  def show
    # Find one work
    @work = Work.find_by(id: params["id"])
    # raise "hell"
  end

  def new
    # Shows a form
    @work = Work.new
  end

  def create
    # Handles the submission of a form
    work = Work.create( work_params() )
    redirect_to work_path(work)
  end

  def edit
    # Shows a form (with prefilled values)
    @work = Work.find_by(id: params["id"])
  end

  def update
    # Handles the submission of a form
    work = Work.find_by(id: params["id"])
    work.update( work_params() )
    redirect_to work_path(work)
  end

  def destroy
    # Deletes a particular record
    work = Work.find_by(id: params["id"])
    work.destroy
    redirect_to works_path()
  end

  private
    def work_params
      params.require(:work).permit(:title, :year, :medium, :style, :image, :artist_id)
    end
end
