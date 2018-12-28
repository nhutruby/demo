module Api
  module V1
    # Users controller
    class UsersController < ApplicationController
      respond_to :json
      before_action :authenticate_with_token!, only: %I[update destroy]
      def show
        respond_with User.find(params[:id])
      end

      def me
        if current_user
          puts 'sss'
          render json: current_user.serializable_hash(only: %I[first_name surname]),
                 status: 200, location: [:api, current_user]
        else
          puts 'eer'
          render json: { error: 'Authorization Fail' }, status: 422
        end
      end

      def create
        user = User.new(user_params)
        if user.save
          render json: user, status: 201, location: [:api, user]
        else
          render json: { errors: user.errors }, status: 422
        end
      end

      def update
        user = current_user
        if user.update(user_params)
          render json: user, status: 200, location: [:api, user]
        else
          render json: { errors: user.errors }, status: 422
        end
      end

      def destroy
        current_user.destroy
        head 204
      end

      private

      def user_params
        params.require(:user).permit(:email, :first_name, :surname,
                                     :password, :password_confirmation)
      end
    end
  end
end
