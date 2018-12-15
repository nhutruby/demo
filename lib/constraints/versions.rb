# Api constraints for routes
class Versions
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
