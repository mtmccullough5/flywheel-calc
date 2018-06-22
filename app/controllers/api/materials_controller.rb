class Api::MaterialsController < ApplicationController
  before_action :set_app, only: [:get_properties, :update, :destroy]
  
  def index    
    render json: Material.all  
  end 

  def get_properties
    render json: @material  
  end 

  def create    
    material = Material.new(material_params)    
    if material.save      
      render json: material    
    else      
      render json: { errors: material.errors.full_messages.join(', ') }    
    end  
  end

  def update    
    if @material.update(material_params)      
      render json: @material    
    else      
      render json: { errors: material.errors.full_messages.join(', ') }    
    end  
  end

  def destroy    
    @material.destroy  
  end

  private

  def set_material    
    @material = Material.find(params[:id])  
  end

  def material_params    
    params.require(:material).permit(      
      :name,      
      :density,
      :yield_strength,      
      :poisson_ratio,   
      )  
    end 

end
