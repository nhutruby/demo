require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "generates a unique token" do
    user = User.new
    user.generate_authentication_token!
    assert_not_nil user.auth_token
  end
end
