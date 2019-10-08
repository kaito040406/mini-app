class CommentsController < ApplicationController
  def index

  end
  def create
    #binding.pry
    @comment = Comment.new(text: comment_params[:text], nickname: comment_params[:nickname], report_id: params[:report_id])
    #@comment = Comment.new(nickname: params[:nickname],text: params[:text], report_id: params[:id])
    if @comment.save
      respond_to do |format|
        format.json
      end
    end
  end

  

  private
  def comment_params
    params.require(:comment).permit(:nickname, :text, :report_id)
  end
end
