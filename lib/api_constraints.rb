# Api constraints for routes
class ApiConstraints
  def initialize(options)
    @version = options[:version]
    @default = options[:default]
  end

  def matches?(req)
    @default || req
      .headers['Accept']
      .include?("application/demo.com.v#{@version}")
  end
end
