
import PropertyCard from './PropertyCard'

const CoreValues = () => {
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-6">Explore Our Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <PropertyCard
                        image="https://placehold.co/400x240"
                        title="Serene Haven"
                        location="UNIPORT"
                        beds={1}
                        baths={1}
                        price="N200,000"
                    />
                    <PropertyCard
                        image="https://placehold.co/400x240"
                        title="Harbor View"
                        location="UNI UYO"
                        beds={3}
                        baths={1}
                        price="N150,000"
                    />
                    <PropertyCard
                        image="https://placehold.co/400x240"
                        title="Harbor View"
                        location="UNI UYO"
                        beds={3}
                        baths={1}
                        price="N150,000"
                    />
                    <PropertyCard
                        image="https://placehold.co/400x240"
                        title="Sunset Ridge"
                        location="RUST"
                        beds={1}
                        baths={1}
                        price="N300,000"
                    />
                </div>
            </div>
        </>
    )
}

export default CoreValues
