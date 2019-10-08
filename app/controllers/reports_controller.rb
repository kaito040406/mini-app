class ReportsController < ApplicationController
  def index
    @reports = Report.all.order('id DESC').page(params[:page]).per(6)
    
  end

  def new
    
  end

  def edit
    @report = Report.find(params[:id])
  end

  def update
    Report.update(title: report_params[:title], text: report_params[:text])
    redirect_to action: :index
  end

  def create
    Report.create(title: report_params[:title], text: report_params[:text])
  end

  def show
    @report = Report.find(params[:id])
    @comments = @report.comments
    @comment = Comment.new
  end

  def destroy
    report = Report.find(params[:id])
      report.destroy
  end

  private
  def report_params
    params.permit(:title, :text)
  end
end
