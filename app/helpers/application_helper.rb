module ApplicationHelper
  def cp(target_path, current_path)
    'current' if current_page?(target_path) || (current_path.start_with?(target_path) && target_path != '/')
  end
end
