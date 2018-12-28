module Api
  module V1
    # Sessions Controller
    class SessionsController < ApplicationController
      # rubocop:disable Metrics/AbcSize
      def create
        user_password = params[:session][:password]
        user_email = params[:session][:email]
        user = user_email.present? && User.find_by(email: user_email)
        if user && user.valid_password?(user_password)
          sign_in user, store: false
          user.generate_authentication_token!
          user.save
          render json: user.serializable_hash(only: %I[auth_token first_name surname]),
                 status: 200, location: [:api, user]
        else
          render json: { error: 'Invalid email or password' }, status: 422
        end
      end

      # rubocop:enable Metrics/AbcSize
      def destroy
        puts 'fuckyou'
        user = User.find_by(auth_token: params[:id])
        user.generate_authentication_token!
        user.save
        head 204
      end
    end
  end
end
