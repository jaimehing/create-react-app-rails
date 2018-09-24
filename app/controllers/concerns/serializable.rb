module Serializable
  include ActiveSupport::Concerns

  def serialize(data, serializer)
    if data.is_a?(ActiveRecord::Relation)
      ActiveModel::Serializer::CollectionSerializer.new(data, { serializer: serializer })
    else
      ActiveModelSerializers::SerializableResource.new(data, { serializer: serializer })
    end
  end
end
