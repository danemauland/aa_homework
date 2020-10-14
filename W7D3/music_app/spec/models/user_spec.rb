require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) do
    user = User.new(
      email: "example@example.com",
      password: "password"
    )
  end
  it {should validate_presence_of(:email)}
  it {should validate_presence_of(:password_digest)}
  it {should validate_length_of(:password). is_at_least(6)}

  describe "is_password?" do
    it "returns true when the right password is entered" do
      expect(user.is_password?("password")).to be true
    end
    it "should return false when the wrong password is entered" do
      expect(user.is_password?("passwor")).to be false
    end
  end

  describe "reset_session_token!" do
    it "should give the user a new session token" do
      old_session_token = user.session_token
      user.reset_session_token!
      expect(user.session_token).to_not eq(old_session_token)
    end
  end

  
end
