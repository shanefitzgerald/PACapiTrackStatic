use Rack::Static,
  :urls => ["/images", "/js", "/css", "/fonts"],
  :root => "public"

require 'rack/rewrite'

use Rack::Rewrite do
  rewrite "/", "/index.html"
end

run Rack::File.new("public")