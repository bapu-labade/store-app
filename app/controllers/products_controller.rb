class ProductsController < ApplicationController

  def index
  end

  def new
  	@product = Product.new
  end

  def create
    @product = Product.new(product_params)
    if @product.save
    	redirect_to @product
    else
    	render 'new'
    end
  end

  def show
  	@product = Product.find(params[:id])
  end

  def get_product_list
    product_list = []
    products = Product.all
    if products.present?
      products.each do |product|
        url = product.image.thumb.url
        product_list << product.attributes.merge(image_path: url)
      end
    end
    render json: product_list
  end
 
  private
    def product_params
      params.require(:product).permit(:name, :description, :image, :price)
    end

end