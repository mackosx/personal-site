class RegistrationsController < Devise::RegistrationsController
  before_action :one_user_registered?, only: %i[new create]

  protected

  def one_user_registered?
    return unless User.count == 1

    if user_signed_in?
      redirect_to root_path
    else
      redirect_to new_user_session_path
    end
  end
end
