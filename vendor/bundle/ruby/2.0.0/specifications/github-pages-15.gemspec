# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "github-pages"
  s.version = "15"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["GitHub, Inc."]
  s.date = "2014-02-03"
  s.description = "Bootstrap the GitHub Pages Jekyll environment locally."
  s.email = "support@github.com"
  s.homepage = "https://github.com/github/pages-gem"
  s.licenses = ["MIT"]
  s.require_paths = ["lib"]
  s.required_ruby_version = Gem::Requirement.new(">= 1.9.3")
  s.rubygems_version = "2.0.14"
  s.summary = "Track GitHub Pages dependencies."

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<jekyll>, ["= 1.4.3"])
      s.add_runtime_dependency(%q<kramdown>, ["= 1.3.1"])
      s.add_runtime_dependency(%q<liquid>, ["= 2.5.5"])
      s.add_runtime_dependency(%q<maruku>, ["= 0.7.0"])
      s.add_runtime_dependency(%q<rdiscount>, ["= 2.1.7"])
      s.add_runtime_dependency(%q<redcarpet>, ["= 2.3.0"])
      s.add_runtime_dependency(%q<RedCloth>, ["= 4.2.9"])
    else
      s.add_dependency(%q<jekyll>, ["= 1.4.3"])
      s.add_dependency(%q<kramdown>, ["= 1.3.1"])
      s.add_dependency(%q<liquid>, ["= 2.5.5"])
      s.add_dependency(%q<maruku>, ["= 0.7.0"])
      s.add_dependency(%q<rdiscount>, ["= 2.1.7"])
      s.add_dependency(%q<redcarpet>, ["= 2.3.0"])
      s.add_dependency(%q<RedCloth>, ["= 4.2.9"])
    end
  else
    s.add_dependency(%q<jekyll>, ["= 1.4.3"])
    s.add_dependency(%q<kramdown>, ["= 1.3.1"])
    s.add_dependency(%q<liquid>, ["= 2.5.5"])
    s.add_dependency(%q<maruku>, ["= 0.7.0"])
    s.add_dependency(%q<rdiscount>, ["= 2.1.7"])
    s.add_dependency(%q<redcarpet>, ["= 2.3.0"])
    s.add_dependency(%q<RedCloth>, ["= 4.2.9"])
  end
end
